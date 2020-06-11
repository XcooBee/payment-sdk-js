import QrGenerator from "easyqrcodejs";

import { paymentSdkConfigType } from "../index";

import { XcoobeePaymentSDK } from "./XcoobeePaymentSDK";

const base64 = {
  atob: (str: string): string => atob(str),
  btoa: (str: string): string => btoa(str),
};

const qrGenerator = {
  generate: (url: string, size: number): string => {
    const root = document.createElement("div");

    root.style.position = "absolute";
    root.style.top = "-9999%";
    root.style.left = "-9999%";
    root.style.opacity = "0";
    document.body.appendChild(root);

    const qr = new QrGenerator(root, {
      text: url,
      width: size,
      height: size,
      logoWidth: size * 0.12,
      logoHeight: size * 0.12,
      logo: "/logo-circle.svg",
      correctLevel: QrGenerator.CorrectLevel.M,
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

export class BrowserXcoobeePaymentSDK extends XcoobeePaymentSDK {
  constructor(config: paymentSdkConfigType) {
    super(config, base64, qrGenerator);
  }
}
