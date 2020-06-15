[payment-sdk](../README.md) › [Globals](../globals.md) › ["XcooBeePaymentSDK"](../modules/_xcoobeepaymentsdk_.md) › [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md)

# Class: XcooBeePaymentSDK

class XcooBeePaymentSDK

## Hierarchy

* **XcooBeePaymentSDK**

  ↳ [NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)

## Index

### Constructors

* [constructor](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#constructor)

### Properties

* [base64](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-base64)
* [campaignId](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-readonly-campaignid)
* [deviceId](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-optional-readonly-deviceid)
* [formId](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-optional-readonly-formid)
* [qrGenerator](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-optional-qrgenerator)
* [source](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-optional-readonly-source)
* [xcoobeeDeviceId](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#private-optional-readonly-xcoobeedeviceid)

### Methods

* [createExternalReferenceQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceqr)
* [createExternalReferenceUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceurl)
* [createMultiSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectqr)
* [createMultiSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselecturl)
* [createMultiSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcostqr)
* [createMultiSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcosturl)
* [createPayQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqr)
* [createPayQrWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqrwithtip)
* [createPayUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurl)
* [createPayUrlWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurlwithtip)
* [createSingleItemQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemqr)
* [createSingleItemUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemurl)
* [createSingleSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectqr)
* [createSingleSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselecturl)
* [createSingleSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcostqr)
* [createSingleSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcosturl)
* [getQrGenerator](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#getqrgenerator)
* [getUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#geturl)

## Constructors

###  constructor

\+ **new XcooBeePaymentSDK**(`config`: [PaymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype), `base64`: [Base64Interface](../interfaces/_types_.base64interface.md), `qrGenerator?`: [QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)): *[XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md)*

*Defined in [XcooBeePaymentSDK.ts:33](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [PaymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype) |
`base64` | [Base64Interface](../interfaces/_types_.base64interface.md) |
`qrGenerator?` | [QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md) |

**Returns:** *[XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md)*

## Properties

### `Private` base64

• **base64**: *[Base64Interface](../interfaces/_types_.base64interface.md)*

*Defined in [XcooBeePaymentSDK.ts:32](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L32)*

___

### `Private` `Readonly` campaignId

• **campaignId**: *string*

*Defined in [XcooBeePaymentSDK.ts:27](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L27)*

___

### `Private` `Optional` `Readonly` deviceId

• **deviceId**? : *string*

*Defined in [XcooBeePaymentSDK.ts:29](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L29)*

___

### `Private` `Optional` `Readonly` formId

• **formId**? : *string*

*Defined in [XcooBeePaymentSDK.ts:28](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L28)*

___

### `Private` `Optional` qrGenerator

• **qrGenerator**? : *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

*Defined in [XcooBeePaymentSDK.ts:33](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L33)*

___

### `Private` `Optional` `Readonly` source

• **source**? : *string*

*Defined in [XcooBeePaymentSDK.ts:31](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L31)*

___

### `Private` `Optional` `Readonly` xcoobeeDeviceId

• **xcoobeeDeviceId**? : *string*

*Defined in [XcooBeePaymentSDK.ts:30](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L30)*

## Methods

###  createExternalReferenceQr

▸ **createExternalReferenceQr**(`priceCode`: string, `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:381](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L381)*

Create QR to add single item to basket
Pricing description and image will be loaded from external source using priceCode

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`priceCode` | string | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`priceCode`: string): *string*

*Defined in [XcooBeePaymentSDK.ts:366](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L366)*

Create url to add single item to basket
Pricing description and image will be loaded from external source using priceCode

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`priceCode` | string |

**Returns:** *string*

___

###  createMultiSelectQr

▸ **createMultiSelectQr**(`config`: [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:314](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L314)*

Create QR to add single item to basket where user can select multiple additional options from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`config`: [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:296](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L296)*

Create url to add single item to basket where user can select multiple additional options from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createMultiSelectWithCostQr

▸ **createMultiSelectWithCostQr**(`config`: [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:348](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L348)*

Create QR to add single item to basket where user can select multiple additional options from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createMultiSelectWithCostUrl

▸ **createMultiSelectWithCostUrl**(`config`: [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:329](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L329)*

Create url to add single item to basket where user can select multiple additional options from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) |

**Returns:** *string*

___

###  createPayQr

▸ **createPayQr**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:151](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L151)*

Create simple payment request QR

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createPayQrWithTip

▸ **createPayQrWithTip**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:181](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L181)*

Create payment request QR with tip

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createPayUrl

▸ **createPayUrl**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:133](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L133)*

Create simple payment request URL

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:162](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L162)*

Create payment request URL with tip

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleItemQr

▸ **createSingleItemQr**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:213](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L213)*

Create QR to add single item to basket where user can enter amount for this item

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`config`: [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:195](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L195)*

Create url to add single item to basket where user can enter amount for this item

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectQr

▸ **createSingleSelectQr**(`config`: [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:245](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L245)*

Create QR to add single item to basket where user can select one additional option from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`config`: [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:227](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L227)*

Create url to add single item to basket where user can select one additional option from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectWithCostQr

▸ **createSingleSelectWithCostQr**(`config`: [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype), `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:279](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L279)*

Create QR to add single item to basket where user can select one additional option from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../modules/_types_.md#qrtype)*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`config`: [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:260](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L260)*

Create url to add single item to basket where user can select one additional option from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) |

**Returns:** *string*

___

###  getQrGenerator

▸ **getQrGenerator**(): *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

*Defined in [XcooBeePaymentSDK.ts:79](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L79)*

Returns qr generator if provided

**Returns:** *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

___

###  getUrl

▸ **getUrl**(`flexItems`: [Builder](_builder_.builder.md)[]): *string*

*Defined in [XcooBeePaymentSDK.ts:93](https://github.com/XcooBee/payment-sdk-js/blob/e695a7a/src/XcooBeePaymentSDK.ts#L93)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`flexItems` | [Builder](_builder_.builder.md)[] | [] |

**Returns:** *string*
