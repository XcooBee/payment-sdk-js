import { paymentSdkConfigType } from "../index";

import { XcooBeePaymentSDK } from "./XcooBeePaymentSDK";

import { logoSrc } from "./config";

export const base64 = {
  atob: (str: string): string => Buffer.from(str, "base64").toString(),
  btoa: (str: string): string => Buffer.from(str).toString("base64"),
};

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

export class NodeXcooBeePaymentSDK extends XcooBeePaymentSDK {
  constructor(config: paymentSdkConfigType) {
    super(config, base64, qrGenerator);
  }
}
