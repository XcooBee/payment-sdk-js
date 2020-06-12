/* tslint:disable */

import { expect } from "chai";
import "mocha";

import { Builder } from "../src/Builder";

import {
  flexPaymentActions,
  maxAmount,
  maxRefSize,
  minAmount,
  optionsLimit,
} from "../src/config";

const testItem = {
  amount: 1,
  tax: 1,
  reference: "Test",
};

const testRaw = {
  "0-3": 1,
  "0-5": 1,
  "0-6": "Test",
};

const invalidReference = "TestTestTestTestTestTestTestTestTestTestTest";

const testLogic = { a: flexPaymentActions.setTotal };

describe("Builder test", () => {
  it("should create instance of Builder", () => {
    const builderWithLogic = new Builder({ ...testItem, logic: testLogic });
    const builderWithMultiLogic = new Builder({
      ...testItem,
      logic: [testLogic, testLogic],
    });
    const builder = new Builder(testItem);

    expect(builderWithLogic).to.be.instanceOf(Builder);
    expect(builderWithLogic.toJSON()).to.deep.equal({
      "0-3": 1,
      "0-5": 1,
      "0-6": "Test",
      l: { a: flexPaymentActions.setTotal },
    });
    expect(builderWithMultiLogic).to.be.instanceOf(Builder);
    expect(builderWithMultiLogic.toJSON()).to.deep.equal({
      "0-3": 1,
      "0-5": 1,
      "0-6": "Test",
      l: { a: flexPaymentActions.setTotal },
    });
    expect(builder).to.be.instanceOf(Builder);
    expect(builder.toJSON()).to.deep.equal({
      "0-3": 1,
      "0-5": 1,
      "0-6": "Test",
    });
  });

  it("should generate item key", () => {
    const builder = new Builder({ ...testItem, logic: testLogic });

    expect(builder.getKey()).to.equal("Test11");
  });

  it("should set amount", () => {
    const builder = new Builder().setAmount(1);

    expect(builder.toJSON()).to.deep.equal({ "0-3": 1 });
  });

  it("should set tax", () => {
    const builder = new Builder().setTax(1);

    expect(builder.toJSON()).to.deep.equal({ "0-5": 1 });
  });

  it("should set reference", () => {
    const builder = new Builder().setReference("Test");

    expect(builder.toJSON()).to.deep.equal({ "0-6": "Test" });
  });

  it("should populate from raw entry", () => {
    const builderWithLogic = new Builder().fromRaw({ ...testRaw, l: testLogic });
    const builderWithMultiLogic = new Builder().fromRaw({
      ...testRaw,
      l: [testLogic, testLogic],
    });
    const builder = new Builder().fromRaw({ ...testRaw });

    expect(builder.toJSON()).to.deep.equal(testRaw);
    expect(builderWithLogic.toJSON()).to.deep.equal({
      ...testRaw,
      l: testLogic,
    });
    expect(builderWithMultiLogic.toJSON()).to.deep.equal({
      ...testRaw,
      l: testLogic,
    });
  });

  it("should check if action is presented", () => {
    const builder = new Builder({ ...testItem, logic: testLogic });

    expect(builder.hasAction(flexPaymentActions.setTotal)).to.be.true;
  });

  it("should add logic", () => {
    const builder = new Builder(testItem)
      .makeTip()
      .addLogic({ a: flexPaymentActions.setTotal })
      .addLogic({ a: flexPaymentActions.setTotal })
      .addLogic({ a: flexPaymentActions.addMaxOrFixed, r: "Extra Fee", M: 10 })
      .addLogic({ a: flexPaymentActions.addMaxOrFixed, r: "Another Fee", M: 10 })
      .addLogic({ a: flexPaymentActions.addMaxOrFixed, r: "Extra Fee", M: 3 });

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: [
        { a: flexPaymentActions.setTotal },
        { a: flexPaymentActions.addMaxOrFixed, M: 10, r: "Another Fee" },
        { a: flexPaymentActions.addMaxOrFixed, M: 3, r: "Extra Fee" },
      ],
    });
  });

  it("should not add logic", () => {
    const builder = new Builder(testItem);

    try {
      builder.addLogic({ a: -1 });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Unknown action");
    }
  });

  it("should clear logic", () => {
    const builder = new Builder(testItem).makeTotal().clearLogic();

    expect(builder.toJSON()).to.deep.equal(testRaw);
  });

  it("should make total", () => {
    const builder = new Builder().makeTotal();

    expect(builder.toJSON()).to.deep.equal({ l: { a: flexPaymentActions.setTotal } });
  });

  it("should make tip", () => {
    const builder = new Builder(testItem).makeTip();

    expect(builder.toJSON()).to.deep.equal({ l: { a: flexPaymentActions.setTip } });
  });

  it("should make user entry", () => {
    const builder = new Builder(testItem).makeUserEntry();

    expect(builder.toJSON()).to.deep.equal({
      "0-5": testItem.tax,
      "0-6": testItem.reference,
      l: { a: flexPaymentActions.userEntry },
    });
  });

  it("should add checkboxes", () => {
    const builder = new Builder(testItem).addCheckboxes(["item1", "item2"]);

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: { a: flexPaymentActions.addSubCheckbox, r: ["item1", "item2"] },
    });
  });

  it("should not add checkboxes", () => {
    const builder = new Builder(testItem);

    try {
      builder.addCheckboxes([null]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be string[]");
    }
    try {
      builder.addCheckboxes(null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be string[]");
    }
    try {
      builder.addCheckboxes([invalidReference]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addCheckboxes(new Array(30).fill("test"));
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max options allowed is ${optionsLimit}`);
    }
  });

  it("should add checkboxes with extra price", () => {
    const builder = new Builder(testItem).addCheckboxesWithCost([
      ["item1", 1],
      ["item2", 2],
    ]);

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: {
        a: flexPaymentActions.addSubCheckboxWithExtraCost,
        r: [
          ["item1", 1],
          ["item2", 2],
        ],
      },
    });
  });

  it("should not add checkboxes with cost", () => {
    const builder = new Builder(testItem);

    try {
      builder.addCheckboxesWithCost([null]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addCheckboxesWithCost([[null, null]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addCheckboxesWithCost([["null", null]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addCheckboxesWithCost([[null, 1]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addCheckboxesWithCost(null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addCheckboxesWithCost([[invalidReference, 1]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addCheckboxesWithCost(new Array(30).fill(["test", 1]));
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max options allowed is ${optionsLimit}`);
    }
  });

  it("should add radio", () => {
    const builder = new Builder(testItem).addRadio(["item1", "item2"]);

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: { a: flexPaymentActions.addSubRadio, r: ["item1", "item2"] },
    });
  });

  it("should not add radio", () => {
    const builder = new Builder(testItem);

    try {
      builder.addRadio([null]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be string[]");
    }
    try {
      builder.addRadio(null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be string[]");
    }
    try {
      builder.addRadio([invalidReference]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addRadio(new Array(30).fill("test"));
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max options allowed is ${optionsLimit}`);
    }
  });

  it("should add radio with extra price", () => {
    const builder = new Builder(testItem).addRadioWithCost([
      ["item1", 1],
      ["item2", 2],
    ]);

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: {
        a: flexPaymentActions.addSubRadioWithExtraCost,
        r: [
          ["item1", 1],
          ["item2", 2],
        ],
      },
    });
  });

  it("should not add radio with cost", () => {
    const builder = new Builder(testItem);

    try {
      builder.addRadioWithCost([null]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addRadioWithCost([[null, null]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addRadioWithCost([["null", null]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addRadioWithCost([[null, 1]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addRadioWithCost(null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Options expected to be [string, number][]");
    }
    try {
      builder.addRadioWithCost([[invalidReference, 1]]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addRadioWithCost(new Array(30).fill(["test", 1]));
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max options allowed is ${optionsLimit}`);
    }
  });

  it("should make external pricing", () => {
    const builder = new Builder(testItem).makeExternal("shoe");

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: { a: flexPaymentActions.externalPricing, r: "shoe" },
    });
  });

  it("should not make external pricing", () => {
    const builder = new Builder(testItem);

    try {
      builder.makeExternal(null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Price code is required");
    }
    try {
      builder.makeExternal(invalidReference);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Price code max length is ${maxRefSize} chars`);
    }
  });

  it("should add percentage or min", () => {
    const builder = new Builder(testItem).addPercentageOrMin({
      reference: "Fee",
      percentage: 0.1,
      min: 5,
    });

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: { a: flexPaymentActions.addMinOrFixed, r: "Fee", o: 0.1, m: 5 },
    });
  });

  it("should not add percentage or min", () => {
    const builder = new Builder(testItem);

    try {
      builder.addPercentageOrMin({ reference: null });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Reference is required");
    }
    try {
      builder.addPercentageOrMin({ reference: invalidReference });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addPercentageOrMin({ reference: "Test" });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Percentage or min fixed amount required");
    }
  });

  it("should add percentage or max", () => {
    const builder = new Builder(testItem).addPercentageOrMax({
      reference: "Fee",
      percentage: 0.1,
      max: 5,
    });

    expect(builder.toJSON()).to.deep.equal({
      ...testRaw,
      l: { a: flexPaymentActions.addMaxOrFixed, r: "Fee", o: 0.1, M: 5 },
    });
  });

  it("should not add percentage or max", () => {
    const builder = new Builder(testItem);

    try {
      builder.addPercentageOrMax({ reference: null });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Reference is required");
    }
    try {
      builder.addPercentageOrMax({ reference: invalidReference });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
    try {
      builder.addPercentageOrMax({ reference: "Test" });
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Percentage or max fixed amount required");
    }
  });

  it("should require amount", () => {
    const builder = new Builder({ reference: "Test" }).addPercentageOrMax({
      reference: "Fee",
      percentage: 0.1,
      max: 5,
    });

    try {
      builder.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Amount required");
    }
  });

  it("should validate zero amount", () => {
    const zeroAmount = new Builder({ amount: 0, reference: "Test" });

    try {
      zeroAmount.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Amount must be in range ${minAmount} - ${maxAmount}`);
    }
  });

  it("should validate negative amount", () => {
    const negativeAmount = new Builder({ amount: -1, reference: "Test" });

    try {
      negativeAmount.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Amount must be in range ${minAmount} - ${maxAmount}`);
    }
  });

  it("should validate large amount", () => {
    const infinityAmount = new Builder({ amount: Infinity, reference: "Test" });

    try {
      infinityAmount.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Amount must be in range ${minAmount} - ${maxAmount}`);
    }
  });

  it("should require reference", () => {
    const builder = new Builder({ amount: 12 }).addPercentageOrMax({
      reference: "Fee",
      percentage: 0.1,
      max: 5,
    });

    try {
      builder.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Reference required");
    }
  });

  it("should validate reference", () => {
    const builder = new Builder({
      amount: 2,
      reference: invalidReference,
    });

    try {
      builder.toJSON();
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Reference max length is ${maxRefSize} chars`);
    }
  });
});
