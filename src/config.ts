export enum flexPaymentActions {
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

export const flexPaymentActionsList = Object.keys(flexPaymentActions).map(
  (key) => flexPaymentActions[key]
) as number[];

export const conflictingActions = [
  flexPaymentActions.externalPricing,
  flexPaymentActions.userEntry,
  flexPaymentActions.setTotal,
  flexPaymentActions.setTip,
];

export const minAmount = 0.05;
export const maxAmount = 9999.99;
export const maxRefSize = 40;
export const optionsLimit = 25;
export const maxDataPackageSize = 1800;
export const urlMaxLength = 2048;
export const maxDeviceIdLength = 200;
export const maxSourceLength = 10;
export const defaultQrSize = 450;
export const appUrl = "https://testapp.xcoobee.com";
