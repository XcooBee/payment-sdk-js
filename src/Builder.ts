import {
  flexItemHumanizedType,
  flexItemType,
  flexLogicType,
  listWithCostType,
  logicReferenceOptionType,
  simpleListType,
} from "./types";

import {
  conflictingActions,
  flexPaymentActions,
  maxAmount,
  maxRefSize,
  minAmount,
  optionsLimit,
} from "./config";

/**
 * @class Builder
 */
export class Builder {
  private amount?: number;
  private tax?: number;
  private reference?: string;
  private logic: flexLogicType[] = [];

  /**
   * Validates single logic item
   *
   * @param {flexLogicType} logic
   * @returns {string | null}
   */
  static validateLogic(logic: flexLogicType): string | null {
    const { a, r, o, m, M } = logic;

    switch (a) {
      case flexPaymentActions.addMinOrFixed: {
        if (!r) {
          return "Reference is required";
        }
        if (r.length > maxRefSize) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        if (!o && !m) {
          return "Percentage or min fixed amount required";
        }
        return null;
      }
      case flexPaymentActions.addMaxOrFixed: {
        if (!r) {
          return "Reference is required";
        }
        if (r.length > maxRefSize) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        if (!o && !M) {
          return "Percentage or max fixed amount required";
        }
        return null;
      }
      case flexPaymentActions.addSubCheckbox:
      case flexPaymentActions.addSubRadio: {
        if (
          !Array.isArray(r) ||
          r.some((ref: logicReferenceOptionType) => typeof ref !== "string")
        ) {
          return "Options expected to be string[]";
        }
        if (r.length > optionsLimit) {
          return `Max options allowed is ${optionsLimit}`;
        }
        if (r.some((ref: logicReferenceOptionType) => ref.length > maxRefSize)) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case flexPaymentActions.addSubRadioWithExtraCost:
      case flexPaymentActions.addSubCheckboxWithExtraCost: {
        if (
          !Array.isArray(r) ||
          r.some(
            (option: logicReferenceOptionType) =>
              !Array.isArray(option) ||
              typeof option[0] !== "string" ||
              typeof option[1] !== "number"
          )
        ) {
          return "Options expected to be [string, number][]";
        }
        if (r.length > optionsLimit) {
          return `Max options allowed is ${optionsLimit}`;
        }
        if (r.some((option: logicReferenceOptionType) => option[0].length > maxRefSize)) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case flexPaymentActions.externalPricing: {
        if (!r) {
          return "Price code is required";
        }
        if (r.length > maxRefSize) {
          return `Price code max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case flexPaymentActions.userEntry:
      case flexPaymentActions.setTotal:
      case flexPaymentActions.setTip:
        return null;
      default:
        return "Unknown action";
    }
  }

  constructor(config?: flexItemHumanizedType) {
    if (!config) {
      return;
    }
    this.amount = config.amount;
    this.tax = config.tax;
    this.reference = config.reference;

    if (config.logic) {
      (Array.isArray(config.logic) ? config.logic : [config.logic]).forEach((item) =>
        this.addLogic(item)
      );
    }
  }

  getKey(): string {
    return `${this.reference}${this.amount}${this.tax}`;
  }

  /**
   * Sets an amount
   * @param {number} amount
   * @returns {Builder}
   */
  setAmount(amount: number): Builder {
    this.amount = amount;
    return this;
  }

  /**
   * Sets tax
   * @param {number} tax
   * @returns {Builder}
   */
  setTax(tax: number): Builder {
    this.tax = tax;
    return this;
  }

  /**
   * Sets reference
   * @param {string} reference
   * @returns {Builder}
   */
  setReference(reference: string): Builder {
    this.reference = reference;
    return this;
  }

  /**
   * Populates data from raw data package
   *
   * @param {flexItemType} config
   * @returns {Builder}
   */
  fromRaw(config: flexItemType): Builder {
    this.amount = config["0-3"];
    this.tax = config["0-5"];
    this.reference = config["0-6"];

    if (config.l) {
      (Array.isArray(config.l) ? config.l : [config.l]).forEach((item) =>
        this.addLogic(item)
      );
    }
    return this;
  }

  /**
   * Checks whether current item has given action
   *
   * @param {flexPaymentActions} action
   * @returns {boolean}
   */
  hasAction(action: flexPaymentActions) {
    return this.logic.some((item) => item.a === action);
  }

  /**
   * Validates requirements for amount\tax\reference fields
   *
   * @returns {string | null} - returns error text or null
   */
  validate(): string | null {
    if (this.hasAction(flexPaymentActions.setTip)) {
      return null;
    }
    if (!this.amount) {
      if (
        this.logic.length &&
        !(
          this.hasAction(flexPaymentActions.externalPricing) ||
          this.hasAction(flexPaymentActions.userEntry) ||
          this.hasAction(flexPaymentActions.setTip) ||
          this.hasAction(flexPaymentActions.setTotal)
        )
      ) {
        return "Amount required";
      }
    }
    if (
      !/(undefined|null|^$)/.test(String(this.amount)) &&
      (this.amount < minAmount || this.amount > maxAmount)
    ) {
      return `Amount must be in range ${minAmount} - ${maxAmount}`;
    }
    if (!this.reference) {
      if (
        this.logic.length &&
        !(
          this.hasAction(flexPaymentActions.externalPricing) ||
          this.hasAction(flexPaymentActions.setTip) ||
          this.hasAction(flexPaymentActions.setTotal)
        )
      ) {
        return "Reference required";
      }
    }
    if (this.reference && this.reference.length > maxRefSize) {
      return `Reference max length is ${maxRefSize} chars`;
    }
  }

  /**
   * Adds logic to current item
   *
   * @throws {Error}
   * @param {flexLogicType} item
   * @returns {Builder}
   */
  addLogic(item: flexLogicType): Builder {
    const err = Builder.validateLogic(item);

    if (err) {
      throw new Error(err);
    }

    if (item.a === flexPaymentActions.setTip) {
      this.logic = [{ a: flexPaymentActions.setTip }];
      return this;
    }

    if (this.hasAction(flexPaymentActions.setTip)) {
      this.logic = this.logic.filter(
        (logicItem: flexLogicType) => logicItem.a !== flexPaymentActions.setTip
      );
    }

    if (
      conflictingActions.indexOf(item.a) !== -1 &&
      this.logic.some((logicItem) => conflictingActions.indexOf(logicItem.a) !== -1)
    ) {
      this.logic = this.logic.filter(
        (logicItem) => conflictingActions.indexOf(logicItem.a) === -1
      );
    }
    this.logic = [
      ...(item.r ? this.logic.filter((logicItem) => logicItem.r !== item.r) : this.logic),
      item,
    ];
    return this;
  }

  /**
   * Clears logic for current item
   *
   * @returns {Builder}
   */
  clearLogic(): Builder {
    this.logic = [];
    return this;
  }

  /**
   * Makes current item a tip item
   * This will render separte item in basket with tip inputs
   *
   * @returns {Builder}
   */
  makeTip(): Builder {
    return this.addLogic({ a: flexPaymentActions.setTip });
  }

  /**
   * Makes current item a total item
   * This item will replace all current basket with it
   * Can be used with Tip
   *
   * @returns {Builder}
   */
  makeTotal(): Builder {
    return this.addLogic({ a: flexPaymentActions.setTotal });
  }

  /**
   * Allows user to enter amount for this item
   *
   * @returns {Builder}
   */
  makeUserEntry(): Builder {
    return this.addLogic({ a: flexPaymentActions.userEntry });
  }

  /**
   * Loads pricing\description\image\logic from external source using `priceCode`
   *
   * @param {string} priceCode
   * @returns {Builder}
   */
  makeExternal(priceCode: string): Builder {
    return this.addLogic({ a: flexPaymentActions.externalPricing, r: priceCode });
  }

  /**
   * Adds extra item to basket, for which amount is calculated based on total basket amount
   * Can be used for taxes or extra fees e.t.c.
   * At least one of percentage|min must be provided
   * percentage should be given in range [-1:1]
   * min is fixed amount
   *
   * @param {{}} config
   * @param {string} config.reference
   * @param {number} [config.percentage]
   * @param {number} [config.min]
   * @returns {Builder}
   */
  addPercentageOrMin(config: {
    reference: string;
    percentage?: number;
    min?: number;
  }): Builder {
    return this.addLogic({
      a: flexPaymentActions.addMinOrFixed,
      r: config.reference,
      o: config.percentage,
      m: config.min,
    });
  }

  /**
   * Adds extra item to basket, for which amount is calculated based on total basket amount
   * Can be used for taxes or extra fees e.t.c.
   * At least one of percentage|max must be provided
   * percentage should be given in range [-1:1]
   * max is fixed amount
   *
   * @param {{}} config
   * @param {string} config.reference
   * @param {number} [config.percentage]
   * @param {number} [config.max]
   * @returns {Builder}
   */
  addPercentageOrMax(config: {
    reference: string;
    percentage?: number;
    max?: number;
  }): Builder {
    return this.addLogic({
      a: flexPaymentActions.addMaxOrFixed,
      r: config.reference,
      o: config.percentage,
      M: config.max,
    });
  }

  /**
   * Adds list with additions options inside current item to choose one of them
   *
   * @param {simpleListType} options
   * @param options
   * @returns {Builder}
   */
  addRadio(options: simpleListType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubRadio, r: options });
  }

  /**
   * Adds list with additions options, with extra cost for each, inside current item to choose one of them
   *
   * @param {listWithCostType} options
   * @param options
   * @returns {Builder}
   */
  addRadioWithCost(options: listWithCostType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubRadioWithExtraCost, r: options });
  }

  /**
   * Adds list with additions options inside current item to choose any of them
   *
   * @param {simpleListType} options
   * @param options
   * @returns {Builder}
   */
  addCheckboxes(options: simpleListType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubCheckbox, r: options });
  }

  /**
   * Adds list with additions options, with extra cost for each, inside current item to choose any of them
   *
   * @param {listWithCostType} options
   * @param options
   * @returns {Builder}
   */
  addCheckboxesWithCost(options: listWithCostType): Builder {
    return this.addLogic({
      a: flexPaymentActions.addSubCheckboxWithExtraCost,
      r: options,
    });
  }

  /**
   * Validates and transforms builder instance into object
   *
   * @throws {Error}
   * @returns {flexItemType}
   */
  toJSON(): flexItemType {
    const err = this.validate();

    if (err) {
      throw new Error(err);
    }

    const data = {} as flexItemType;

    if (
      this.amount &&
      !this.hasAction(flexPaymentActions.setTip) &&
      !this.hasAction(flexPaymentActions.userEntry)
    ) {
      data["0-3"] = this.amount;
    }
    if (this.tax && !this.hasAction(flexPaymentActions.setTip)) {
      data["0-5"] = this.tax;
    }
    if (this.reference && !this.hasAction(flexPaymentActions.setTip)) {
      data["0-6"] = this.reference;
    }
    if (this.logic.length) {
      data.l = this.logic;
    }
    if (this.logic.length === 1) {
      data.l = this.logic[0];
    }

    return data;
  }
}
