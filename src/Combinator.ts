import Builder from "./Builder";

import { flexPaymentActions } from "./config";

class Combinator {
  static getKey(item: Builder): string {
    return `${item.reference}${item.amount}`;
  }

  static combine(items: Builder[]): Builder[] {
    const map = {};
    let tip;
    let total;

    items.forEach((item) => {
      map[Combinator.getKey(item)] = item;
      if (item.hasAction(flexPaymentActions.setTip)) {
        tip = item;
      }
      if (item.hasAction(flexPaymentActions.setTotal)) {
        total = item;
      }
    });

    if (total) {
      return [tip, total].filter(Boolean);
    }
    return Object.keys(map).map((key) => map[key]);
  }
}
