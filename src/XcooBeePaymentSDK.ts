import { base64 } from "base64";

import {
  DefaultPayUrlConfigType,
  ListPayUrlConfigType,
  ListWithCostPayUrlConfigType,
  PaymentSdkConfigType,
  QrGeneratorInterface,
  QrType,
} from "./types";

import {
  appUrl,
  defaultQrSize,
  maxDataPackageSize,
  maxDeviceIdLength,
  maxSourceLength,
  urlMaxLength,
} from "./config";

import { Builder } from "./Builder";
import { combineToJSON } from "./utils";

/**
 * class XcooBeePaymentSDK
 */
export class XcooBeePaymentSDK {
  private readonly campaignId: string;
  private readonly formId?: string;
  private readonly deviceId?: string;
  private readonly xcoobeeDeviceId?: string;
  private readonly source?: string;
  private qrGenerator?: QrGeneratorInterface;

  constructor(config: PaymentSdkConfigType, qrGenerator?: QrGeneratorInterface) {
    if (!config) {
      throw new Error("config is required");
    }
    if (!config.campaignId) {
      throw new Error("campaignId is required");
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
    this.qrGenerator = qrGenerator;
  }

  /**
   * Returns qr generator if provided
   *
   * @returns {QrGeneratorInterface}
   */
  private getQrGenerator(): QrGeneratorInterface {
    if (!this.qrGenerator) {
      throw new Error("qrGenerator was not provided");
    }
    return this.qrGenerator;
  }

  /**
   * Converts data package to url
   *
   * @throws {Error}
   * @param {Builder[]} flexItems
   * @returns {string}
   */
  private getUrl(flexItems: Builder[] = []): string {
    const dataPackage = flexItems.length ? base64.btoa(combineToJSON(flexItems)) : "";

    if (dataPackage.length > maxDataPackageSize) {
      throw new Error(
        `Data package is too large, max size: ${maxDataPackageSize}, received: ${dataPackage.length}`
      );
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
    const url = `${appUrl}/securePay/${this.campaignId}${
      this.formId ? `/${this.formId}` : ""
    }${queryString ? `?${queryString}` : ""}`;

    if (url.length > urlMaxLength) {
      throw new Error(`Invalid url, length is more than ${urlMaxLength} chars`);
    }
    return url;
  }

  /**
   * Create simple payment request URL
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createPayUrl(config: DefaultPayUrlConfigType): string {
    const total = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeTotal();

    return this.getUrl([total]);
  }

  /**
   * Create simple payment request QR
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createPayQr(config: DefaultPayUrlConfigType, size: number = defaultQrSize): QrType {
    return this.getQrGenerator().generate(this.createPayUrl(config), size);
  }

  /**
   * Create payment request URL with tip
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createPayUrlWithTip(config: DefaultPayUrlConfigType): string {
    const total = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeTotal();
    const tip = new Builder().makeTip();

    return this.getUrl([total, tip]);
  }

  /**
   * Create payment request QR with tip
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createPayQrWithTip(
    config: DefaultPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(this.createPayUrlWithTip(config), size);
  }

  /**
   * Create url to add single item to basket where user can enter amount for this item
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createSingleItemUrl(config: DefaultPayUrlConfigType): string {
    const userEntry = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).makeUserEntry();

    return this.getUrl([userEntry]);
  }

  /**
   * Create QR to add single item to basket where user can enter amount for this item
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createSingleItemQr(
    config: DefaultPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(this.createSingleItemUrl(config), size);
  }

  /**
   * Create url to add single item to basket where user can select one additional option from a list of given options
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createSingleSelectUrl(config: ListPayUrlConfigType): string {
    const radio = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addRadio(config.options);

    return this.getUrl([radio]);
  }

  /**
   * Create QR to add single item to basket where user can select one additional option from a list of given options
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createSingleSelectQr(
    config: ListPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(this.createSingleSelectUrl(config), size);
  }

  /**
   * Create url to add single item to basket where user can select one additional option from a list of given options
   * Each option can have extra price
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createSingleSelectWithCostUrl(config: ListWithCostPayUrlConfigType): string {
    const radio = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addRadioWithCost(config.options);

    return this.getUrl([radio]);
  }

  /**
   * Create QR to add single item to basket where user can select one additional option from a list of given options
   * Each option can have extra price
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createSingleSelectWithCostQr(
    config: ListWithCostPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(
      this.createSingleSelectWithCostUrl(config),
      size
    );
  }

  /**
   * Create url to add single item to basket where user can select multiple additional options from a list of given options
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createMultiSelectUrl(config: ListPayUrlConfigType): string {
    const checkboxes = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addCheckboxes(config.options);

    return this.getUrl([checkboxes]);
  }

  /**
   * Create QR to add single item to basket where user can select multiple additional options from a list of given options
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createMultiSelectQr(
    config: ListPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(this.createMultiSelectUrl(config), size);
  }

  /**
   * Create url to add single item to basket where user can select multiple additional options from a list of given options
   * Each option can have extra price
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @returns {string}
   */
  createMultiSelectWithCostUrl(config: ListWithCostPayUrlConfigType): string {
    const checkboxes = new Builder({
      amount: config.amount,
      tax: config.tax,
      reference: config.reference,
    }).addCheckboxesWithCost(config.options);

    return this.getUrl([checkboxes]);
  }

  /**
   * Create QR to add single item to basket where user can select multiple additional options from a list of given options
   * Each option can have extra price
   *
   * @throws {Error}
   * @param {DefaultPayUrlConfigType} config
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createMultiSelectWithCostQr(
    config: ListWithCostPayUrlConfigType,
    size: number = defaultQrSize
  ): QrType {
    return this.getQrGenerator().generate(
      this.createMultiSelectWithCostUrl(config),
      size
    );
  }

  /**
   * Create url to add single item to basket
   * Pricing description and image will be loaded from external source using priceCode
   *
   * @throws {Error}
   * @param {string} priceCode
   * @returns {string}
   */
  createExternalReferenceUrl(priceCode: string): string {
    const externalPricing = new Builder().makeExternal(priceCode);

    return this.getUrl([externalPricing]);
  }

  /**
   * Create QR to add single item to basket
   * Pricing description and image will be loaded from external source using priceCode
   *
   * @throws {Error}
   * @param {string} priceCode
   * @param {number} [size = defaultQrSize]
   * @returns {QrType}
   */
  createExternalReferenceQr(priceCode: string, size: number = defaultQrSize): QrType {
    return this.getQrGenerator().generate(
      this.createExternalReferenceUrl(priceCode),
      size
    );
  }
}
