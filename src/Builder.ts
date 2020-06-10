import {
  flexItemHumanizedType,
  flexItemType,
  flexLogicType,
  listWithCostType,
  simpleListType,
} from "./types";

import { conflictingActions, flexPaymentActions } from "./config";

class Builder {
  amount?: number;
  tax?: number;
  reference?: string;
  logic: flexLogicType[] = [];

  constructor(config: flexItemHumanizedType) {
    this.amount = config.amount;
    this.tax = config.tax;
    this.reference = config.reference;

    (config.logic || []).forEach((item) => this.addItem(item));
  }

  fromRaw(config: flexItemType) {
    this.amount = config["0-3"];
    this.tax = config["0-5"];
    this.reference = config["0-6"];

    (config.l || []).forEach((item) => this.addItem(item));
  }

  hasAction(action: flexPaymentActions) {
    return this.logic.some((item) => item.a === action);
  }

  validate() {
    if (this.hasAction(flexPaymentActions.setTip)) {
      return true;
    }
    if (!this.amount) {
      if (
        !(
          !this.logic.length ||
          this.hasAction(flexPaymentActions.externalPricing) ||
          this.hasAction(flexPaymentActions.userEntry) ||
          this.hasAction(flexPaymentActions.setTip) ||
          this.hasAction(flexPaymentActions.setTotal)
        )
      ) {
        // TODO:
      }
    }
    if (!this.reference) {
      return (
        this.hasAction(flexPaymentActions.externalPricing) ||
        this.hasAction(flexPaymentActions.setTip) ||
        this.hasAction(flexPaymentActions.setTotal)
      );
    }
  }

  addItem(item: flexLogicType): Builder {
    if (
      conflictingActions.indexOf(item.a) !== -1 &&
      this.logic.some((logicItem) => conflictingActions.indexOf(logicItem.a) !== -1)
    ) {
      this.logic = this.logic.filter(
        (logicItem) => conflictingActions.indexOf(logicItem.a) === -1
      );
    }
    this.logic = [...this.logic.filter((logicItem) => logicItem.a !== item.a), item];
    return this;
  }

  makeTip(): Builder {
    return this.addItem({ a: flexPaymentActions.setTip });
  }

  makeTotal(): Builder {
    return this.addItem({ a: flexPaymentActions.setTotal });
  }

  makeUserEntry(): Builder {
    return this.addItem({ a: flexPaymentActions.userEntry });
  }

  makeExternal(priceCode: string): Builder {
    return this.addItem({ a: flexPaymentActions.externalPricing, r: priceCode });
  }

  addPercentageOrMin(percentage: number, min: number): Builder {
    return this.addItem({ a: flexPaymentActions.addMinOrFixed, o: percentage, m: min });
  }

  addPercentageOrMax(percentage: number, max: number): Builder {
    return this.addItem({ a: flexPaymentActions.addMaxOrFixed, o: percentage, M: max });
  }

  addRadio(options: simpleListType): Builder {
    return this.addItem({ a: flexPaymentActions.addSubRadio, r: options });
  }

  addRadioWithCost(options: listWithCostType): Builder {
    return this.addItem({ a: flexPaymentActions.addSubRadioWithExtraCost, r: options });
  }

  addCheckboxes(options: simpleListType): Builder {
    return this.addItem({ a: flexPaymentActions.addSubCheckbox, r: options });
  }

  addCheckboxesWithCost(options: listWithCostType): Builder {
    return this.addItem({
      a: flexPaymentActions.addSubCheckboxWithExtraCost,
      r: options,
    });
  }

  toJSON() {
    return {
      "0-3": this.amount,
      "0-5": this.tax,
      "0-6": this.reference,
      l: JSON.parse(JSON.stringify(this.logic)),
    };
  }
}

export default Builder;
