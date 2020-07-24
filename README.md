# XcooBee Contactless Payment SDK for JavaScript

## Description

The XcooBee contactless payment system is a complete shopping cart and checkout system that can be included in your projects (mobile or web) quickly. In order to fully use this, you will need a XcooBee account ( Professional, Business, or Enterprise) and an active “Payment Project” created.

The SDK simplifies the generation of URLs and QRs. Smart QRs and URLs can cover many different use cases.

The URLs can be sent to remote users or embedded in a website to quickly add a shopping cart system with a few lines. Examples of this could be "Pay" buttons or "Add to Cart" links for merchandise that is sold on the site.

The URLs can help you build a very simply shopping system that is focused on cart and checkout. Nothing else is needed.

Touchless smart QRs can be used with users that are directly in vicinity of your app or to start a shopping/payment process from physical media like signs and printed materials. Examples of this would include restaurant menus, flyers, catalogs, books, invoices, statements, etc..

## Prerequisites

You will need to setup a XcooBee Payment Request project in order to obtain test and or production campaign codes. You can setup a free [XcooBee Professional](https://app.xcoobee.net/auth/signup?level=professional) Account for this purpose and generate test keys.

During the XcooBee account setup you will also be able to select your payment processor or setup one if needed.

## Installation

### Node

```
npm i @xcoobee/payment-sdk
```

### Web

For simple use directly download the minified build from our CDN via script tag you can add async option. Placement in HTML header section before `<body>` tag.

```
<script src="https://app.xcoobee.net/scripts/sdk/xcoobee-pay-sdk.min.js"></script>

```

As an alternative you can build the browser yourself and distribute via your own webservers:

```
npm i @xcoobee/payment-sdk
```


Follow the install steps with the build step to create distribution for web if needed. For node projects this is not needed.

```
npm run build
```


## Documentation

The SDK life cycle is composed of standard class init via a constructor + configuration object followed by using the appropriate method to generate the type of pay URL or QR needed for your operation.

#### Direct Check Out Methods

The direct check out methods allow you to create a URL or QR for payment of one specific amount. It is like an overall total to be paid to you. When end-user interacts (scans QR or clicks URL) they will be asked to make payment for that amount and any existing items in the cart will be removed.

Methods in this group are:

- createPayQr
- createPayQrWithTip
- createPayUrl
- createPayUrlWithTip

#### Cart Methods

Cart methods allow for your users to assemble items in a shopping cart. The overall total is determined by the number and quantity of items in the cart.  You can create URL and QR that will **add** to the cart. So you are only adding a single item amount. When end-user interacts (scans QR or clicks URL) this item will be placed in the cart and the user can continue shopping/interacting with your system to add more items before completing a final checkout.

Methods in this group are:

- createMultiSelectQr
- createMultiSelectUrl
- createMultiSelectWithCostQr
- createMultiSelectWithCostUrl
- createSingleItemQr
- createSingleItemUrl
- createSingleSelectQr
- createSingleSelectUrl
- createSingleSelectWithCostQr
- createSingleSelectWithCostUrl
- createExternalReferenceQr
- createExternalReferenceUrl

Please see API documentation for full information on each of these methods.


### Usage


#### Browser Example

```JavaScript
//1. import browser SDK
import { BrowserXcooBeePaymentSDK } from "../../dist/browser/browser";

//2. init constructor with config object. Use your campaign and form id from XcooBee Project
const sdk = new BrowserXcooBeePaymentSDK({ campaignId: "test", formId: "test" });

//3. start generating QR or URL using cart or checkout methods
sdk.createPayQr({ amount: 123, reference: "Order" }, 300).then((qr) => {
  const img = document.createElement("img");

  img.src = qr;

  document.body.appendChild(img);
});

```

#### Node Example

```JavaScript
// 1. Require the XcooBee SDK library
const { NodeXcooBeePaymentSDK } = require("@xcoobee/payment-sdk/dist/node/node");

// 2. initialize your session with campaign and form ids from XcooBee Project
const sdk = new NodeXcooBeePaymentSDK({ campaignId: "test", formId: "test" });
  
// 3. generate and use 
sdk
  .createPayQr({ amount: 123, reference: "Order" }, 100)
  .then((base64) => {
      //you can render a QR by adding base 64 to src of img tag
      console.log(base64); console.log(base64);        
  });
```

#### Example App

- [Walk through creating Ionic App](https://www.xcoobee.com/contactless-payment-for-ionic-framework-in-minutes/)
- [Mobile Ionic App Github](https://github.com/XcooBee/example-payment-sdk-ionic)

#### Roundtrip notification

Since end-users are using their own devices to complete payment you will need to setup an endpoint that can accept notification via webhook post from XcooBee. 

This is also done in your XcooBee Payment Request Project UI.

XcooBee will deliver the result of payment processing to that endpoint. 
We have full stack example that shows this process in detail in our github repo that you can review for implementation.

If you are using mobile devices you should also consider providing a specific device id  that is originating the payment request when initializing the SDK library. You do this by adding the `deviceId` parameter.

```JavaScript

const sdk = new NodeXcooBeePaymentSDK({ campaignId: "test", formId: "test", deviceId: "78hs7yajsdiydsifsd83u78yhisd78yf7dyud" });

```

The payment processing information will also contain this device id and allow you push notifications to it using your normal channels.


If you are in development mode, you can also use a polling mechanism where you check the XcooBee network for the processing results.
Please see our event poller example for how this can be done as well as our example full stack app.


### Full API

See the complete documentation for [node](docs/node/README.md) and [browser](docs/browser/README.md).


## Deployment

```
npm run build
```

## Tests

```
npm test
```

or

```
npm run coverage
```


#### Alternative renderers

You can replace the bundled QR code generator with your own renderer.

To use without QR generator or to provide your own please use this [link](note.md)