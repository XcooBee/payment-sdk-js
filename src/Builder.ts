import {
  FlexItemHumanizedType,
  FlexItemType,
  FlexLogicType,
  FlexPaymentActions,
  ListWithCostType,
  LogicReferenceOptionType,
  SimpleListType,
} from "./types";

import {
  conflictingActions,
  maxAmount,
  maxRefSize,
  minAmount,
  optionsLimit,
} from "./config";

/**
 * @internal
 * @class Builder
 */
export class Builder {
  private amount?: number;
  private tax?: number;
  private reference?: string;
  private logic: FlexLogicType[] = [];

  /**
   * Validates single logic item
   *
   * @param {FlexLogicType} logic
   * @returns {string | null}
   */
  static validateLogic(logic: FlexLogicType): string | null {
    switch (logic.a) {
      case FlexPaymentActions.addMinOrFixed: {
        const { r, o, m } = logic;

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
      case FlexPaymentActions.addMaxOrFixed: {
        const { r, o, M } = logic;

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
      case FlexPaymentActions.addSubCheckbox:
      case FlexPaymentActions.addSubRadio: {
        const { r } = logic;

        if (
          !Array.isArray(r) ||
          r.some((ref: LogicReferenceOptionType) => typeof ref !== "string")
        ) {
          return "Options expected to be string[]";
        }
        if (r.length > optionsLimit) {
          return `Max options allowed is ${optionsLimit}`;
        }
        if (r.some((ref: LogicReferenceOptionType) => ref.length > maxRefSize)) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case FlexPaymentActions.addSubRadioWithExtraCost:
      case FlexPaymentActions.addSubCheckboxWithExtraCost: {
        const { r } = logic;

        if (
          !Array.isArray(r) ||
          r.some(
            (option: LogicReferenceOptionType) =>
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
        if (r.some((option: LogicReferenceOptionType) => option[0].length > maxRefSize)) {
          return `Reference max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case FlexPaymentActions.externalPricing: {
        const { r } = logic;

        if (!r) {
          return "Price code is required";
        }
        if (r.length > maxRefSize) {
          return `Price code max length is ${maxRefSize} chars`;
        }
        return null;
      }
      case FlexPaymentActions.userEntry:
      case FlexPaymentActions.setTotal:
      case FlexPaymentActions.setTip:
        return null;
      default:
        return "Unknown action";
    }
  }

  constructor(config?: FlexItemHumanizedType) {
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
    return `${this.reference}_${this.amount}_${this.tax}`;
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
   * @param {FlexItemType} config
   * @returns {Builder}
   */
  fromRaw(config: FlexItemType): Builder {
    this.amount = config["0-3"];
    this.tax = config["0-5"];
    this.reference = config["0-6"];
    this.logic = [];

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
   * @param {FlexPaymentActions} action
   * @returns {boolean}
   */
  hasAction(action: FlexPaymentActions): boolean {
    return this.logic.some((item) => item.a === action);
  }

  /**
   * Validates requirements for amount\tax\reference fields
   *
   * @returns {string | null} - returns error text or null
   */
  validate(): string | null {
    if (this.hasAction(FlexPaymentActions.setTip)) {
      return null;
    }
    if (!this.amount) {
      if (
        this.logic.length &&
        !(
          this.hasAction(FlexPaymentActions.externalPricing) ||
          this.hasAction(FlexPaymentActions.userEntry) ||
          this.hasAction(FlexPaymentActions.setTip) ||
          this.hasAction(FlexPaymentActions.setTotal)
        )
      ) {
        return "Amount required";
      }
    }
    if (
      !/(undefined|null|^$)/.test(String(this.amount)) &&
      (this.amount < 0 || this.amount > maxAmount)
    ) {
      return `Amount must be in range 0 - ${maxAmount}`;
    }
    if (!this.reference) {
      if (
        this.logic.length &&
        !(
          this.hasAction(FlexPaymentActions.externalPricing) ||
          this.hasAction(FlexPaymentActions.setTip) ||
          this.hasAction(FlexPaymentActions.setTotal)
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
   * @param {FlexLogicType} item
   * @returns {Builder}
   */
  addLogic(item: FlexLogicType): Builder {
    const err = Builder.validateLogic(item);

    if (err) {
      throw new Error(err);
    }

    if (item.a === FlexPaymentActions.setTip) {
      this.logic = [{ a: FlexPaymentActions.setTip }];
      return this;
    }

    if (this.hasAction(FlexPaymentActions.setTip)) {
      this.logic = this.logic.filter(
        (logicItem: FlexLogicType) => logicItem.a !== FlexPaymentActions.setTip
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
      ...this.logic.filter(
        (logicItem) => logicItem.a !== item.a && (!item.r || logicItem.r !== item.r)
      ),
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
   * This will render separate item in basket with tip inputs
   *
   * @returns {Builder}
   */
  makeTip(): Builder {
    return this.addLogic({ a: FlexPaymentActions.setTip });
  }

  /**
   * Makes current item a total item
   * This item will replace all current basket with it
   * Can be used with Tip
   *
   * @returns {Builder}
   */
  makeTotal(): Builder {
    return this.addLogic({ a: FlexPaymentActions.setTotal });
  }

  /**
   * Allows user to enter amount for this item
   *
   * @returns {Builder}
   */
  makeUserEntry(): Builder {
    return this.addLogic({ a: FlexPaymentActions.userEntry });
  }

  /**
   * Loads pricing\description\image\logic from external source using `priceCode`
   *
   * @param {string} priceCode
   * @returns {Builder}
   */
  makeExternal(priceCode: string): Builder {
    return this.addLogic({ a: FlexPaymentActions.externalPricing, r: priceCode });
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
      a: FlexPaymentActions.addMinOrFixed,
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
      a: FlexPaymentActions.addMaxOrFixed,
      r: config.reference,
      o: config.percentage,
      M: config.max,
    });
  }

  /**
   * Adds list with additions options inside current item to choose one of them
   *
   * @param {SimpleListType} options
   * @param options
   * @returns {Builder}
   */
  addRadio(options: SimpleListType): Builder {
    return this.addLogic({ a: FlexPaymentActions.addSubRadio, r: options });
  }

  /**
   * Adds list with additions options, with extra cost for each, inside current item to choose one of them
   *
   * @param {ListWithCostType} options
   * @param options
   * @returns {Builder}
   */
  addRadioWithCost(options: ListWithCostType): Builder {
    return this.addLogic({ a: FlexPaymentActions.addSubRadioWithExtraCost, r: options });
  }

  /**
   * Adds list with additions options inside current item to choose any of them
   *
   * @param {SimpleListType} options
   * @param options
   * @returns {Builder}
   */
  addCheckboxes(options: SimpleListType): Builder {
    return this.addLogic({ a: FlexPaymentActions.addSubCheckbox, r: options });
  }

  /**
   * Adds list with additions options, with extra cost for each, inside current item to choose any of them
   *
   * @param {ListWithCostType} options
   * @param options
   * @returns {Builder}
   */
  addCheckboxesWithCost(options: ListWithCostType): Builder {
    return this.addLogic({
      a: FlexPaymentActions.addSubCheckboxWithExtraCost,
      r: options,
    });
  }

  /**
   * Validates and transforms builder instance into object
   *
   * @throws {Error}
   * @returns {FlexItemType}
   */
  toJSON(): FlexItemType {
    const err = this.validate();

    if (err) {
      throw new Error(err);
    }

    const data = {} as FlexItemType;

    if (
      this.amount &&
      !this.hasAction(FlexPaymentActions.setTip) &&
      !this.hasAction(FlexPaymentActions.userEntry)
    ) {
      data["0-3"] = this.amount;
    }
    if (this.tax && !this.hasAction(FlexPaymentActions.setTip)) {
      data["0-5"] = this.tax;
    }
    if (this.reference && !this.hasAction(FlexPaymentActions.setTip)) {
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
