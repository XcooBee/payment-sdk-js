const { NodeXcooBeePaymentSDK } = require("../dist/node/node");

const sdk = new NodeXcooBeePaymentSDK({ campaignId: "test", formId: "test" });

sdk
  .createPayQr({ amount: 123, reference: "Order" }, 100)
  .then((base64) => console.log(base64));
