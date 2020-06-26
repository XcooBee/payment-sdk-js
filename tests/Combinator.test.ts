import { expect } from "chai";
import "mocha";

import { Builder } from "../src/Builder";
import { combine, combineToJSON } from "../src/utils";
import { FlexPaymentActions } from "../src/types";

describe("Combinator test", () => {
  it("should combine builders", () => {
    const total = new Builder({ amount: 12 }).makeTotal();
    const tip = new Builder().makeTip();
    const userEntry = new Builder({ reference: "User entry" }).makeUserEntry();
    const checkBoxes = new Builder({ amount: 1, reference: "List" }).addCheckboxes([
      "1",
      "2",
      "3",
    ]);

    expect(
      combine([total, tip, userEntry]).map((item) => item.toJSON())
    ).to.be.deep.equal([
      { l: { a: FlexPaymentActions.setTip } },
      { "0-3": 12, l: { a: FlexPaymentActions.setTotal } },
    ]);

    expect(
      combine([tip, userEntry, checkBoxes]).map((item) => item.toJSON())
    ).to.be.deep.equal([
      { l: { a: FlexPaymentActions.setTip } },
      { "0-6": "User entry", l: { a: FlexPaymentActions.userEntry } },
      {
        "0-3": 1,
        "0-6": "List",
        l: { a: FlexPaymentActions.addSubCheckbox, r: ["1", "2", "3"] },
      },
    ]);
  });

  it("should combine builders and convert to json string", () => {
    const total = new Builder({ amount: 12 }).makeTotal();
    const tip = new Builder().makeTip();

    expect(combineToJSON([total, tip])).to.equal(
      JSON.stringify([
        { l: { a: FlexPaymentActions.setTip } },
        { "0-3": 12, l: { a: FlexPaymentActions.setTotal } },
      ])
    );
  });
});
