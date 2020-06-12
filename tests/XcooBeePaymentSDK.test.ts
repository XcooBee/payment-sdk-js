/* tslint:disable */

import { expect } from "chai";
import "mocha";
import "mocha-sinon";

import { XcooBeePaymentSDK } from "../src/XcooBeePaymentSDK";
import { appUrl, maxDeviceIdLength, maxSourceLength, urlMaxLength } from "../src/config";
import { Builder } from "../src/Builder";

const mockedBase64 = {
  atob: (str: string) => str,
  btoa: (str: string) => str,
};

const mockedQrGenerator = {
  generate: (str: string) => str,
};

const longString = new Array(201).fill("t").join("");
const maxReferenceString = new Array(40).fill("t").join("");

describe("XcooBeePaymentSDK test", () => {
  it("should create instance of XcooBeePaymentSDK", () => {
    const sdk = new XcooBeePaymentSDK(
      {
        campaignId: "t",
      },
      mockedBase64
    );

    expect(sdk).to.be.instanceOf(XcooBeePaymentSDK);
  });

  it("should warn when both deviceId and xcoobeeDeviceId provided", function () {
    this.sinon.stub(console, "warn");

    const sdk = new XcooBeePaymentSDK(
      { campaignId: "t", deviceId: "s", xcoobeeDeviceId: "s" },
      mockedBase64
    );
    // @ts-ignore
    expect(console.warn.calledOnce).to.true;
    expect(
      // @ts-ignore
      console.warn.calledWith(
        "deviceId and xcoobeeDeviceId both provided. xcoobeeDeviceId will be used"
      )
    ).to.true;
  });

  it("should not create instance of XcooBeePaymentSDK", () => {
    try {
      const sdk = new XcooBeePaymentSDK(null, null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("config is required");
    }
    try {
      const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("base64 is required");
    }
    try {
      const sdk = new XcooBeePaymentSDK({ campaignId: null }, null);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("campaignId is required");
    }
    try {
      const sdk = new XcooBeePaymentSDK(
        { campaignId: "t", deviceId: longString },
        mockedBase64
      );
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max deviceId length is ${maxDeviceIdLength}`);
    }
    try {
      const sdk = new XcooBeePaymentSDK(
        { campaignId: "t", xcoobeeDeviceId: longString },
        mockedBase64
      );
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max xcoobeeDeviceId length is ${maxDeviceIdLength}`);
    }
    try {
      const sdk = new XcooBeePaymentSDK(
        { campaignId: "t", source: longString },
        mockedBase64
      );
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(`Max source length is ${maxSourceLength}`);
    }
  });

  it("should get qr generator", () => {
    const sdk = new XcooBeePaymentSDK(
      { campaignId: "t" },
      mockedBase64,
      mockedQrGenerator
    );

    expect(sdk.getQrGenerator()).to.equal(mockedQrGenerator);
  });

  it("should not get qr generator", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    try {
      sdk.getQrGenerator();
    } catch (e) {
      expect(e.message).to.equal("qrGenerator was not provided");
    }
  });

  it("should generate url", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);
    const total = new Builder().makeTotal();

    expect(sdk.getUrl([total])).to.equal(
      `${appUrl}/securePay/t?d=${JSON.stringify([total])}`
    );
  });

  it("should add deviceId", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t", deviceId: "t" }, mockedBase64);

    expect(sdk.getUrl()).to.equal(`${appUrl}/securePay/t?ed=t`);
  });

  it("should add xcoobeeDeviceId", () => {
    const sdk = new XcooBeePaymentSDK(
      { campaignId: "t", deviceId: "t", xcoobeeDeviceId: "t" },
      mockedBase64
    );

    expect(sdk.getUrl()).to.equal(`${appUrl}/securePay/t?did=t`);
  });

  it("should add formId", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t", formId: "t" }, mockedBase64);

    expect(sdk.getUrl()).to.equal(`${appUrl}/securePay/t/t`);
  });

  it("should add formId", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t", formId: "t" }, mockedBase64);

    expect(sdk.getUrl()).to.equal(`${appUrl}/securePay/t/t`);
  });

  it("should not generate url", () => {
    const sdk = new XcooBeePaymentSDK(
      {
        campaignId: longString,
        formId: longString,
        deviceId: new Array(200).fill("t").join(""),
      },
      mockedBase64
    );
    const tooLargeItem = new Builder({ amount: 1, reference: maxReferenceString })
      .addRadio(new Array(25).fill(maxReferenceString))
      .addRadioWithCost(new Array(25).fill([maxReferenceString, 1]))
      .addCheckboxes(new Array(25).fill(maxReferenceString));
    const largeItem = new Builder({ amount: 1, reference: maxReferenceString })
      .addRadio(new Array(25).fill(maxReferenceString))
      .addCheckboxes(new Array(14).fill(maxReferenceString));

    try {
      sdk.getUrl([tooLargeItem]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal("Data package is too large");
    }
    try {
      sdk.getUrl([largeItem]);
      expect(false).to.be.true;
    } catch (e) {
      expect(e.message).to.equal(
        `Invalid url, length is more than ${urlMaxLength} chars`
      );
    }
  });

  it("should generate createPayUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(sdk.createPayUrl({ amount: 1 })).to.equal(
      `${appUrl}/securePay/t?d=[{"0-3":1,"l":{"a":10}}]`
    );
  });

  it("should generate createPayUrlWithTip", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(sdk.createPayUrlWithTip({ amount: 1 })).to.equal(
      `${appUrl}/securePay/t?d=[{"l":{"a":7}},{"0-3":1,"l":{"a":10}}]`
    );
  });

  it("should generate createSingleItemUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(sdk.createSingleItemUrl({ amount: 1, reference: "t" })).to.equal(
      `${appUrl}/securePay/t?d=[{"0-6":"t","l":{"a":9}}]`
    );
  });

  it("should generate createSingleSelectUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(
      sdk.createSingleSelectUrl({ amount: 1, reference: "t", options: ["t", "t"] })
    ).to.equal(`${appUrl}/securePay/t?d=[{"0-3":1,"0-6":"t","l":{"a":3,"r":["t","t"]}}]`);
  });

  it("should generate createSingleSelectWithCostUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(
      sdk.createSingleSelectWithCostUrl({
        amount: 1,
        reference: "t",
        options: [["t", 1]],
      })
    ).to.equal(`${appUrl}/securePay/t?d=[{"0-3":1,"0-6":"t","l":{"a":4,"r":[["t",1]]}}]`);
  });

  it("should generate createMultiSelectUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(
      sdk.createMultiSelectUrl({ amount: 1, reference: "t", options: ["t", "t"] })
    ).to.equal(`${appUrl}/securePay/t?d=[{"0-3":1,"0-6":"t","l":{"a":5,"r":["t","t"]}}]`);
  });

  it("should generate createMultiSelectWithCostUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(
      sdk.createMultiSelectWithCostUrl({
        amount: 1,
        reference: "t",
        options: [["t", 1]],
      })
    ).to.equal(`${appUrl}/securePay/t?d=[{"0-3":1,"0-6":"t","l":{"a":6,"r":[["t",1]]}}]`);
  });

  it("should generate createExternalReferenceUrl", () => {
    const sdk = new XcooBeePaymentSDK({ campaignId: "t" }, mockedBase64);

    expect(sdk.createExternalReferenceUrl("shoe")).to.equal(
      `${appUrl}/securePay/t?d=[{"l":{"a":8,"r":"shoe"}}]`
    );
  });
});
