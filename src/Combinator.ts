import { Builder } from "./Builder";

import { flexPaymentActions } from "./config";

export class Combinator {
  static combine(items: Builder[]): Builder[] {
    const map = {};
    let tip: Builder;
    let total: Builder;

    items.forEach((item) => {
      map[item.getKey()] = item;
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

  static combineToJSON(items: Builder[]): string {
    return JSON.stringify(Combinator.combine(items));
  }
}
