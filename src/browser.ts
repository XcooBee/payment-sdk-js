import { PaymentSdkConfigType, QrGeneratorInterface } from "./types";

import { XcooBeePaymentSDK } from "./XcooBeePaymentSDK";

import { logoSrc } from "./config";

/**
 * Implements web version of QrGeneratorInterface to generate QRs
 *
 * @implements QrGeneratorInterface
 */
const qrGenerator: QrGeneratorInterface = {
  generate: (url: string, size: number): Promise<string> =>
    new Promise((resolve) => {
      let QrCode;
      try {
        // tslint:disable-next-line:no-var-requires
        QrCode = require("easyqrcodejs");
      } catch (e) {
        // tslint:disable-next-line no-console
        console.warn("Optional dependency easyqrcodejs was not installed");
        return "";
      }

      const root = document.createElement("div");

      root.style.position = "absolute";
      root.style.top = "-9999%";
      root.style.left = "-9999%";
      root.style.opacity = "0";
      document.body.appendChild(root);

      const qr = new QrCode(root, {
        text: url,
        width: size,
        height: size,
        logoWidth: size * 0.12,
        logoHeight: size * 0.12,
        logo: logoSrc,
        correctLevel: QrCode.CorrectLevel.M,
        onRenderingEnd: (options: {}, dataURL: string) => {
          resolve(dataURL);
          root.remove();
        },
      });
    }),
};

/**
 * Wrapper for Web
 * Provides implementations for Base64Interface and QrGeneratorInterface
 *
 * @class BrowserXcooBeePaymentSDK
 * @extends XcooBeePaymentSDK
 */
class BrowserXcooBeePaymentSDK extends XcooBeePaymentSDK {
  constructor(config: PaymentSdkConfigType) {
    super(config, qrGenerator);
  }
}

if (!window.XcooBee) {
  window.XcooBee = {};
}
if (!window.XcooBee.BrowserXcooBeePaymentSDK) {
  window.XcooBee.BrowserXcooBeePaymentSDK = BrowserXcooBeePaymentSDK;
}
if (!window.XcooBee.XcooBeePaymentSDK) {
  window.XcooBee.XcooBeePaymentSDK = XcooBeePaymentSDK;
}

export { BrowserXcooBeePaymentSDK };
