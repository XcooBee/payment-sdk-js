import { PaymentSdkConfigType } from "./types";

import { XcooBeePaymentSDK } from "./XcooBeePaymentSDK";

import { logoSrc } from "./config";

/**
 * Implements node version of Base64Interface to manipulate base64 strings
 *
 * @implements Base64Interface
 */
export const base64 = {
  atob: (str: string): string => Buffer.from(str, "base64").toString(),
  btoa: (str: string): string => Buffer.from(str).toString("base64"),
};

/**
 * Implements node version of QrGeneratorInterface to generate QRs
 *
 * @implements QrGeneratorInterface
 */
export const qrGenerator = {
  generate: (url: string, size: number): Promise<string> => {
    let QrCode;
    try {
      // tslint:disable-next-line:no-var-requires
      QrCode = require("easyqrcodejs-nodejs");
    } catch (e) {
      // tslint:disable-next-line no-console
      console.warn("Optional dependency easyqrcodejs-nodejs was not installed");
      return Promise.resolve("");
    }

    const qr = new QrCode({
      text: url,
      width: size,
      height: size,
      logoWidth: size * 0.12,
      logoHeight: size * 0.12,
      logo: logoSrc,
      correctLevel: QrCode.CorrectLevel.M,
    });

    return qr.toDataURL();
  },
};

/**
 * Wrapper for Node
 * Provides implementations for Base64Interface and QrGeneratorInterface
 *
 * @class BrowserXcooBeePaymentSDK
 * @extends XcooBeePaymentSDK
 */
export class NodeXcooBeePaymentSDK extends XcooBeePaymentSDK {
  constructor(config: PaymentSdkConfigType) {
    super(config, base64, qrGenerator);
  }
}
