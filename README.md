# XcooBee Payment SDK for JavaScript - Node and Browser

## Installation

### Node

```
npm i @xcoobee/payment-sdk-js easyqrcodejs-nodejs
```

### Web

```
npm i @xcoobee/payment-sdk-js easyqrcodejs
```

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

## Usage

### Web

```
import { BrowserXcoobeePaymentSDK } from "@xcoobee/payment-sdk-js";

const sdk = new BrowserXcoobeePaymentSDK({
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
});
```

### Node

```
const { NodeXcoobeePaymentSDK } = require("@xcoobee/payment-sdk-js");

const sdk = new NodeXcoobeePaymentSDK({
  campaignId: string;
  formId?: string;
  deviceId?: string;
  xcoobeeDeviceId?: string;
  source?: string;
});
```

### Methods

#### _createPayUrl({ amount, tax, reference })_

#### _createPayQr({ amount, tax, reference }, size)_

#### _createPayUrlWithTip({ amount, tax, reference })_

#### _createPayQrWithTip({ amount, tax, reference }, size)_

#### _createSingleItemUrl({ amount, tax, reference })_

#### _createSingleItemQr({ amount, tax, reference }, size)_

#### _createSingleSelectUrl({ amount, tax, reference, options })_

```
options: string[]
```

#### _createSingleSelectQr({ amount, tax, reference, options }, size)_

```
options: string[]
```

#### _createSingleSelectWithCostUrl({ amount, tax, reference, options })_

```
options: [string, number][]
```

#### _createSingleSelectWithCostQr({ amount, tax, reference, options }, size)_

```
options: [string, number][]
```

#### _createMultiSelectUrl({ amount, tax, reference, options })_

```
options: string[]
```

#### _createMultiSelectQr({ amount, tax, reference, options }, size)_

```
options: string[]
```

#### _createMultiSelectWithCostUrl({ amount, tax, reference, options })_

```
options: [string, number][]
```

#### _createMultiSelectWithCostQr({ amount, tax, reference, options }, size)_

```
options: [string, number][]
```

#### _createExternalReferenceUrl(priceCode)_

#### _createExternalReferenceQr(priceCode size)_

```
amount: number
tax: number
reference: string
priceCode: string
```

## Deployment

```
npm start
```

## Tests

```
npm test
```

or 

```
npm run coverage
```
