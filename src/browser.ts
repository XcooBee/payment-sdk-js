import { paymentSdkConfigType } from "../index";

import { XcooBeePaymentSDK } from "./XcooBeePaymentSDK";

import { logoSrc } from "./config";

export const base64 = {
  atob: (str: string): string => atob(str),
  btoa: (str: string): string => btoa(str),
};

export const qrGenerator = {
  generate: (url: string, size: number): string => {
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
    });
    const img = root.querySelector("img");
    let base64Img = "";

    if (img) {
      base64Img = img.src;
    }

    root.remove();
    return base64Img;
  },
};

export class BrowserXcooBeePaymentSDK extends XcooBeePaymentSDK {
  constructor(config: paymentSdkConfigType) {
    super(config, base64, qrGenerator);
  }
}
