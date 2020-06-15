import { BrowserXcooBeePaymentSDK } from "../../dist/browser/browser";

const sdk = new BrowserXcooBeePaymentSDK({ campaignId: "test", formId: "test" });

sdk.createPayQr({ amount: 123, reference: "Order" }, 300).then((qr) => {
  const img = document.createElement("img");

  img.src = qr;

  document.body.appendChild(img);
});
