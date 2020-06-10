import { flexPaymentActions } from "./config";

export type paymentSdkConfigType = {
  campaignId: string;
  formId: string;
  xcoobeeDeviceId?: string;
  source?: string;
};

export type flexLogicType = {
  a: flexPaymentActions;
  m?: number;
  M?: number;
  o?: number;
  r?: string | string[] | [string, number][];
};

export type flexItemType = {
  "0-3"?: number;
  "0-5"?: number;
  "0-6"?: string;
  l?: flexLogicType[];
};

export type flexItemHumanizedType = {
  amount?: number;
  tax?: number;
  reference?: string;
  logic?: flexLogicType[];
};

export type simpleListType = string[];
export type listWithCostType = [string, number][];
