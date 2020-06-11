import {
  Base64Interface,
  defaultPayUrlConfigType,
  listPayUrlConfigType,
  listWithCostPayUrlConfigType,
  paymentSdkConfigType,
  QrGeneratorInterface,
} from "../index";

import {
  appUrl,
  defaultQrSize,
  maxDataPackageSize,
  maxDeviceIdLength,
  maxSourceLength,
  urlMaxLength,
} from "./config";

import { Builder } from "./Builder";
import { Combinator } from "./Combinator";

export class XcoobeePaymentSDK {
  private readonly campaignId: string;
  private readonly formId: string;
  private readonly deviceId?: string;
  private readonly xcoobeeDeviceId?: string;
  private readonly source?: string;
  private base64: Base64Interface;
  private qrGenerator?: QrGeneratorInterface;

  constructor(
    config: paymentSdkConfigType,
    base64: Base64Interface,
    qrGenerator?: QrGeneratorInterface
  ) {
    if (!config.campaignId) {
      throw new Error("campaignId is required");
    }
    if (!config.formId) {
      throw new Error("formId is required");
    }
    if (!base64) {
      throw new Error("base64 is required");
    }
    if (config.xcoobeeDeviceId && config.xcoobeeDeviceId.length > maxDeviceIdLength) {
      throw new Error(`Max xcoobeeDeviceId length is ${maxDeviceIdLength}`);
    }
    if (config.deviceId && config.deviceId.length > maxDeviceIdLength) {
      throw new Error(`Max deviceId length is ${maxDeviceIdLength}`);
    }
    if (config.source && config.source.length > maxSourceLength) {
      throw new Error(`Max source length is ${maxSourceLength}`);
    }
    if (config.xcoobeeDeviceId && config.deviceId) {
      // tslint:disable-next-line no-console
      console.warn(
        "deviceId and xcoobeeDeviceId both provided. xcoobeeDeviceId will be used"
      );
    }

    this.campaignId = config.campaignId;
    this.formId = config.formId;
    this.deviceId = config.deviceId;
    this.xcoobeeDeviceId = config.xcoobeeDeviceId;
    this.source = config.source;
    this.base64 = base64;
    this.qrGenerator = qrGenerator;
  }

  getQrGenerator() {
    if (!this.qrGenerator) {
      throw new Error("qrGenerator was not provided");
    }
    return this.qrGenerator;
  }

  getUrl(flexItems: Builder[]): string {
    const dataPackage = this.base64.btoa(Combinator.combineToJSON(flexItems));

    if (dataPackage.length > maxDataPackageSize) {
      throw new Error("Data package is too large");
    }

    const params = {
      d: dataPackage,
      s: this.source,
      did: this.xcoobeeDeviceId,
    } as { d?: string; s?: string; did?: string; ed?: string };

    if (!params.did) {
      params.ed = this.deviceId;
    }

    const queryString = Object.keys(params)
      .filter((key) => params[key])
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    const url = `${appUrl}/securePay/${this.campaignId}/${this.formId}${
      queryString ? `?${queryString}` : ""
    }`;

    if (url.length > urlMaxLength) {
      throw new Error(`Invalid url, length is more than ${urlMaxLength} chars`);
    }
    return url;
  }

  createPayUrl(config: defaultPayUrlConfigType): string {
    const total = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeTotal();

    return this.getUrl([total]);
  }

  createPayQr(config: defaultPayUrlConfigType, size: number = defaultQrSize): string {
    return this.getQrGenerator().generate(this.createPayUrl(config), size);
  }

  createPayUrlWithTip(config: defaultPayUrlConfigType): string {
    const total = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeTotal();
    const tip = new Builder().makeTip();

    return this.getUrl([total, tip]);
  }

  createPayQrWithTip(
    config: defaultPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(this.createPayUrlWithTip(config), size);
  }

  createSingleItemUrl(config: defaultPayUrlConfigType): string {
    const userEntry = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeUserEntry();

    return this.getUrl([userEntry]);
  }

  createSingleItemQr(
    config: defaultPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(this.createSingleItemUrl(config), size);
  }

  createSingleSelectUrl(config: listPayUrlConfigType): string {
    const radio = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addRadio(config.options);

    return this.getUrl([radio]);
  }

  createSingleSelectQr(
    config: listPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(this.createSingleSelectUrl(config), size);
  }

  createSingleSelectWithCostUrl(config: listWithCostPayUrlConfigType): string {
    const radio = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addRadioWithCost(config.options);

    return this.getUrl([radio]);
  }

  createSingleSelectWithCostQr(
    config: listWithCostPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(
      this.createSingleSelectWithCostUrl(config),
      size
    );
  }

  createMultiSelectUrl(config: listPayUrlConfigType): string {
    const checkboxes = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addCheckboxes(config.options);

    return this.getUrl([checkboxes]);
  }

  createMultiSelectQr(
    config: listPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(this.createMultiSelectUrl(config), size);
  }

  createMultiSelectWithCostUrl(config: listWithCostPayUrlConfigType): string {
    const checkboxes = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addCheckboxesWithCost(config.options);

    return this.getUrl([checkboxes]);
  }

  createMultiSelectWithCostQr(
    config: listWithCostPayUrlConfigType,
    size: number = defaultQrSize
  ): string {
    return this.getQrGenerator().generate(
      this.createMultiSelectWithCostUrl(config),
      size
    );
  }

  createExternalReferenceUrl(priceCode: string): string {
    const externalPricing = new Builder().makeExternal(priceCode);

    return this.getUrl([externalPricing]);
  }

  createExternalReferenceQr(priceCode: string, size: number = defaultQrSize): string {
    return this.getQrGenerator().generate(
      this.createExternalReferenceUrl(priceCode),
      size
    );
  }
}
