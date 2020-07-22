[@xcoobee/payment-sdk](README.md)

# @xcoobee/payment-sdk

## Index

### Enumerations

* [FlexPaymentActions](enums/flexpaymentactions.md)

### Classes

* [BrowserXcooBeePaymentSDK](classes/browserxcoobeepaymentsdk.md)
* [XcooBeePaymentSDK](classes/xcoobeepaymentsdk.md)

### Interfaces

* [QrGeneratorInterface](interfaces/qrgeneratorinterface.md)

### Type aliases

* [DefaultPayUrlConfigType](README.md#defaultpayurlconfigtype)
* [FlexItemHumanizedType](README.md#flexitemhumanizedtype)
* [FlexItemType](README.md#flexitemtype)
* [FlexLogicType](README.md#flexlogictype)
* [ListPayUrlConfigType](README.md#listpayurlconfigtype)
* [ListWithCostPayUrlConfigType](README.md#listwithcostpayurlconfigtype)
* [ListWithCostType](README.md#listwithcosttype)
* [LogicReferenceOptionType](README.md#logicreferenceoptiontype)
* [LogicReferenceType](README.md#logicreferencetype)
* [PaymentSdkConfigType](README.md#paymentsdkconfigtype)
* [QrType](README.md#qrtype)
* [SimpleListType](README.md#simplelisttype)

### Variables

* [defaultQrSize](README.md#const-defaultqrsize)
* [maxAmount](README.md#const-maxamount)
* [maxDataPackageSize](README.md#const-maxdatapackagesize)
* [maxDeviceIdLength](README.md#const-maxdeviceidlength)
* [maxRefSize](README.md#const-maxrefsize)
* [maxSourceLength](README.md#const-maxsourcelength)
* [minAmount](README.md#const-minamount)
* [optionsLimit](README.md#const-optionslimit)
* [urlMaxLength](README.md#const-urlmaxlength)

### Object literals

* [qrGenerator](README.md#const-qrgenerator)

## Type aliases

###  DefaultPayUrlConfigType

Ƭ **DefaultPayUrlConfigType**: *object*

*Defined in [types.ts:52](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L52)*

#### Type declaration:

* **amount**? : *number*

* **reference**? : *string*

* **tax**? : *number*

___

###  FlexItemHumanizedType

Ƭ **FlexItemHumanizedType**: *[DefaultPayUrlConfigType](README.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:41](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L41)*

___

###  FlexItemType

Ƭ **FlexItemType**: *object*

*Defined in [types.ts:34](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L34)*

#### Type declaration:

* **0-3**? : *number*

* **0-5**? : *number*

* **0-6**? : *string*

* **l**? : *[FlexLogicType](README.md#flexlogictype) | [FlexLogicType](README.md#flexlogictype)[]*

___

###  FlexLogicType

Ƭ **FlexLogicType**: *object*

*Defined in [types.ts:26](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L26)*

#### Type declaration:

* **M**? : *number*

* **a**: *[FlexPaymentActions](enums/flexpaymentactions.md)*

* **m**? : *number*

* **o**? : *number*

* **r**? : *[LogicReferenceType](README.md#logicreferencetype)*

___

###  ListPayUrlConfigType

Ƭ **ListPayUrlConfigType**: *[DefaultPayUrlConfigType](README.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:58](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L58)*

___

###  ListWithCostPayUrlConfigType

Ƭ **ListWithCostPayUrlConfigType**: *[DefaultPayUrlConfigType](README.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:60](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L60)*

___

###  ListWithCostType

Ƭ **ListWithCostType**: *[string, number][]*

*Defined in [types.ts:46](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L46)*

___

###  LogicReferenceOptionType

Ƭ **LogicReferenceOptionType**: *string | [string, number]*

*Defined in [types.ts:22](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L22)*

___

###  LogicReferenceType

Ƭ **LogicReferenceType**: *string | [SimpleListType](README.md#simplelisttype) | [ListWithCostType](README.md#listwithcosttype)*

*Defined in [types.ts:24](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L24)*

___

###  PaymentSdkConfigType

Ƭ **PaymentSdkConfigType**: *object*

*Defined in [types.ts:14](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L14)*

#### Type declaration:

* **campaignId**: *string*

* **deviceId**? : *string*

* **formId**? : *string*

* **source**? : *string*

* **xcoobeeDeviceId**? : *string*

___

###  QrType

Ƭ **QrType**: *string | Promise‹string›*

*Defined in [types.ts:64](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L64)*

___

###  SimpleListType

Ƭ **SimpleListType**: *string[]*

*Defined in [types.ts:45](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/types.ts#L45)*

## Variables

### `Const` defaultQrSize

• **defaultQrSize**: *450* = 450

*Defined in [config.ts:24](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L24)*

___

### `Const` maxAmount

• **maxAmount**: *9999.99* = 9999.99

*Defined in [config.ts:17](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L17)*

___

### `Const` maxDataPackageSize

• **maxDataPackageSize**: *1800* = 1800

*Defined in [config.ts:20](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L20)*

___

### `Const` maxDeviceIdLength

• **maxDeviceIdLength**: *200* = 200

*Defined in [config.ts:22](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L22)*

___

### `Const` maxRefSize

• **maxRefSize**: *40* = 40

*Defined in [config.ts:18](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L18)*

___

### `Const` maxSourceLength

• **maxSourceLength**: *10* = 10

*Defined in [config.ts:23](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L23)*

___

### `Const` minAmount

• **minAmount**: *0.05* = 0.05

*Defined in [config.ts:16](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L16)*

___

### `Const` optionsLimit

• **optionsLimit**: *25* = 25

*Defined in [config.ts:19](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L19)*

___

### `Const` urlMaxLength

• **urlMaxLength**: *2048* = 2048

*Defined in [config.ts:21](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/config.ts#L21)*

## Object literals

### `Const` qrGenerator

### ▪ **qrGenerator**: *object*

*Defined in [browser.ts:12](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/browser.ts#L12)*

Implements web version of QrGeneratorInterface to generate QRs

**`implements`** QrGeneratorInterface

###  generate

▸ **generate**(`url`: string, `size`: number): *Promise‹string›*

*Defined in [browser.ts:13](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/browser.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`size` | number |

**Returns:** *Promise‹string›*
