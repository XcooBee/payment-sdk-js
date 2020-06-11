import QrGenerator from "easyqrcodejs-nodejs";

import { paymentSdkConfigType } from "../index";

import { XcoobeePaymentSDK } from "./XcoobeePaymentSDK";

const base64 = {
  atob: (str: string): string => new Buffer(str).toString("base64"),
  btoa: (str: string): string => new Buffer(str, "base64").toString(),
};

const qrGenerator = {
  generate: (url: string, size: number): Promise<string> => {
    const qr = new QrGenerator({
      text: url,
      width: size,
      height: size,
      logoWidth: size * 0.12,
      logoHeight: size * 0.12,
      logo: "/logo-circle.svg",
      correctLevel: QrGenerator.CorrectLevel.M,
    });

    return qr.toDataURL();
  },
};

export class NodeXcoobeePaymentSDK extends XcoobeePaymentSDK {
  constructor(config: paymentSdkConfigType) {
    super(config, base64);
  }
}
