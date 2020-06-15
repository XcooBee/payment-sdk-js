import { Builder } from "./Builder";

import { flexPaymentActions } from "./config";

/**
 * class Combinator
 */
export class Combinator {
  /**
   * Combines multiple items into one package
   *
   * @param {Builder[]} items
   * @returns {Builder[]}
   */
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

  /**
   * Combines multiple items into one package and converts to JSON string
   *
   * @param {Builder[]} items
   * @returns {string}
   */
  static combineToJSON(items: Builder[]): string {
    return JSON.stringify(Combinator.combine(items));
  }
}
