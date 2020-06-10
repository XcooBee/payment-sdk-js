import { paymentSdkConfigType } from "./types";

import Builder from "./Builder";

class XcoobeePaymentSDK {
  campaignId: string;
  formId: string;
  xcoobeeDeviceId?: string;
  source?: string;

  constructor(config: paymentSdkConfigType) {
    this.campaignId = config.campaignId;
    this.formId = config.formId;
    this.xcoobeeDeviceId = config.xcoobeeDeviceId;
    this.source = config.source;
  }
}

export default XcoobeePaymentSDK;
