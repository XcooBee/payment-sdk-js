import {
  flexItemHumanizedType,
  flexItemType,
  flexLogicType,
  listWithCostType,
  logicReferenceOptionType,
  simpleListType,
} from "../index";

import {
  conflictingActions,
  flexPaymentActions,
  maxAmount,
  maxRefSize,
  minAmount,
  optionsLimit,
} from "./config";

export class Builder {
  private amount?: number;
  private tax?: number;
  private reference?: string;
  private logic: flexLogicType[] = [];

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

  setAmount(amount: number): Builder {
    this.amount = amount;
    return this;
  }

  setTax(tax: number): Builder {
    this.tax = tax;
    return this;
  }

  setReference(reference: string): Builder {
    this.reference = reference;
    return this;
  }

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

  hasAction(action: flexPaymentActions) {
    return this.logic.some((item) => item.a === action);
  }

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

  clearLogic(): Builder {
    this.logic = [];
    return this;
  }

  makeTip(): Builder {
    return this.addLogic({ a: flexPaymentActions.setTip });
  }

  makeTotal(): Builder {
    return this.addLogic({ a: flexPaymentActions.setTotal });
  }

  makeUserEntry(): Builder {
    return this.addLogic({ a: flexPaymentActions.userEntry });
  }

  makeExternal(priceCode: string): Builder {
    return this.addLogic({ a: flexPaymentActions.externalPricing, r: priceCode });
  }

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

  addRadio(options: simpleListType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubRadio, r: options });
  }

  addRadioWithCost(options: listWithCostType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubRadioWithExtraCost, r: options });
  }

  addCheckboxes(options: simpleListType): Builder {
    return this.addLogic({ a: flexPaymentActions.addSubCheckbox, r: options });
  }

  addCheckboxesWithCost(options: listWithCostType): Builder {
    return this.addLogic({
      a: flexPaymentActions.addSubCheckboxWithExtraCost,
      r: options,
    });
  }

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
