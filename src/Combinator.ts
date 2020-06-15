import { Builder } from "./Builder";

import { FlexPaymentActions } from "./types";

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
      if (item.hasAction(FlexPaymentActions.setTip)) {
        tip = item;
      }
      if (item.hasAction(FlexPaymentActions.setTotal)) {
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
