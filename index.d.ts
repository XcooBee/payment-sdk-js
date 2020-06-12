// Type definitions for xcoobee-payment-sdk
// Project: xcoobee-payment-sdk

import { flexPaymentActions } from "./src/config";

export type paymentSdkConfigType = {
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
};

export type logicReferenceOptionType = string | [string, number];

export type logicReferenceType = string | logicReferenceOptionType[];

export type flexLogicType = {
  a: flexPaymentActions;
  m?: number;
  M?: number;
  o?: number;
  r?: logicReferenceType;
};

export type flexItemType = {
  "0-3"?: number;
  "0-5"?: number;
  "0-6"?: string;
  l?: flexLogicType | flexLogicType[];
};

export type flexItemHumanizedType = {
  amount?: number;
  tax?: number;
  reference?: string;
  logic?: flexLogicType | flexLogicType[];
};

export type simpleListType = string[];
export type listWithCostType = [string, number][];

export interface Base64Interface {
  atob(base64: string): string;
  btoa(content: string): string;
}

export interface QrGeneratorInterface {
  generate(url: string, size: number): string | Promise<string>;
}

export type defaultPayUrlConfigType = {
  amount?: number;
  tax?: number;
  reference?: string;
};

export type listPayUrlConfigType = defaultPayUrlConfigType & { options: simpleListType };

export type listWithCostPayUrlConfigType = defaultPayUrlConfigType & {
  options: listWithCostType;
};

export type qrType = string | Promise<string>;
