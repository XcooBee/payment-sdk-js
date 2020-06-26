export enum FlexPaymentActions {
  addMinOrFixed = 1,
  addMaxOrFixed = 2,
  addSubRadio = 3,
  addSubRadioWithExtraCost = 4,
  addSubCheckbox = 5,
  addSubCheckboxWithExtraCost = 6,
  setTip = 7,
  externalPricing = 8,
  userEntry = 9,
  setTotal = 10,
}

export type PaymentSdkConfigType = {
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
};

export type LogicReferenceOptionType = string | [string, number];

export type LogicReferenceType = string | SimpleListType | ListWithCostType;

export type FlexLogicType = {
  a: FlexPaymentActions;
  m?: number;
  M?: number;
  o?: number;
  r?: LogicReferenceType;
};

export type FlexItemType = {
  "0-3"?: number;
  "0-5"?: number;
  "0-6"?: string;
  l?: FlexLogicType | FlexLogicType[];
};

export type FlexItemHumanizedType = DefaultPayUrlConfigType & {
  logic?: FlexLogicType | FlexLogicType[];
};

export type SimpleListType = string[];
export type ListWithCostType = [string, number][];

export interface QrGeneratorInterface {
  generate(url: string, size: number): Promise<string>;
}

export type DefaultPayUrlConfigType = {
  amount?: number;
  tax?: number;
  reference?: string;
};

export type ListPayUrlConfigType = DefaultPayUrlConfigType & { options: SimpleListType };

export type ListWithCostPayUrlConfigType = DefaultPayUrlConfigType & {
  options: ListWithCostType;
};

export type QrType = string | Promise<string>;
