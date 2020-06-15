### Note

`easyqrcodejs` and `easyqrcodejs-nodejs` are optional dependencies. SDK will still work, but methods to generate QR will not be available.

You can also provide your own qrGenerator:

```
// Web

import { base64 } from "@xcoobee/payment-sdk-js";
import { XcoobeePaymentSDK } from "@xcoobee/payment-sdk-js/dist/XcoobeePaymentSDK";

const myVeryOwnQrGenerator = {
    generate: (string) => any // this method is used to generate QRs internaly
}

const sdk = new XcoobeePaymentSDK({
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
}, base64, myVeryOwnQrGenerator)
```

```
// Node

const { base64 } = require("@xcoobee/payment-sdk-js");
const { XcoobeePaymentSDK } = require("@xcoobee/payment-sdk-js/dist/XcoobeePaymentSDK");

const myVeryOwnQrGenerator = {
    generate: (string) => any // this method is used to generate QRs internaly
}

const sdk = new XcoobeePaymentSDK({
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
}, base64, myVeryOwnQrGenerator)
```
