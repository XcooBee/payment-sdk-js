import { Builder } from "./Builder";

import { FlexPaymentActions } from "./types";

/**
 * @internal
 */
export function combine(items: Builder[]): Builder[] {
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
 * @internal
 * @param {Builder[]} items
 * @returns {string}
 */
export function combineToJSON(items: Builder[]): string {
  return JSON.stringify(combine(items));
}
