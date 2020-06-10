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
