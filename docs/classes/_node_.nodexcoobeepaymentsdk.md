[@xcoobee/payment-sdk](../README.md) › [Globals](../globals.md) › ["node"](../modules/_node_.md) › [NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)

# Class: NodeXcooBeePaymentSDK

Wrapper for Node
Provides implementations for Base64Interface and QrGeneratorInterface

## Hierarchy

* [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md)

  ↳ **NodeXcooBeePaymentSDK**

## Index

### Constructors

* [constructor](_node_.nodexcoobeepaymentsdk.md#constructor)

### Methods

* [createExternalReferenceQr](_node_.nodexcoobeepaymentsdk.md#createexternalreferenceqr)
* [createExternalReferenceUrl](_node_.nodexcoobeepaymentsdk.md#createexternalreferenceurl)
* [createMultiSelectQr](_node_.nodexcoobeepaymentsdk.md#createmultiselectqr)
* [createMultiSelectUrl](_node_.nodexcoobeepaymentsdk.md#createmultiselecturl)
* [createMultiSelectWithCostQr](_node_.nodexcoobeepaymentsdk.md#createmultiselectwithcostqr)
* [createMultiSelectWithCostUrl](_node_.nodexcoobeepaymentsdk.md#createmultiselectwithcosturl)
* [createPayQr](_node_.nodexcoobeepaymentsdk.md#createpayqr)
* [createPayQrWithTip](_node_.nodexcoobeepaymentsdk.md#createpayqrwithtip)
* [createPayUrl](_node_.nodexcoobeepaymentsdk.md#createpayurl)
* [createPayUrlWithTip](_node_.nodexcoobeepaymentsdk.md#createpayurlwithtip)
* [createSingleItemQr](_node_.nodexcoobeepaymentsdk.md#createsingleitemqr)
* [createSingleItemUrl](_node_.nodexcoobeepaymentsdk.md#createsingleitemurl)
* [createSingleSelectQr](_node_.nodexcoobeepaymentsdk.md#createsingleselectqr)
* [createSingleSelectUrl](_node_.nodexcoobeepaymentsdk.md#createsingleselecturl)
* [createSingleSelectWithCostQr](_node_.nodexcoobeepaymentsdk.md#createsingleselectwithcostqr)
* [createSingleSelectWithCostUrl](_node_.nodexcoobeepaymentsdk.md#createsingleselectwithcosturl)
* [getQrGenerator](_node_.nodexcoobeepaymentsdk.md#getqrgenerator)
* [getUrl](_node_.nodexcoobeepaymentsdk.md#geturl)

## Constructors

###  constructor

\+ **new NodeXcooBeePaymentSDK**(`config`: [PaymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype)): *[NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)*

*Overrides [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[constructor](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#constructor)*

*Defined in [node.ts:55](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/node.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [PaymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype) |

**Returns:** *[NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)*

## Methods

###  createExternalReferenceQr

▸ **createExternalReferenceQr**(`priceCode`: string, `size`: number): *[QrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createExternalReferenceQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceqr)*

*Defined in [XcooBeePaymentSDK.ts:381](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L381)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createExternalReferenceUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceurl)*

*Defined in [XcooBeePaymentSDK.ts:366](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L366)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectqr)*

*Defined in [XcooBeePaymentSDK.ts:314](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L314)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselecturl)*

*Defined in [XcooBeePaymentSDK.ts:296](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L296)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:348](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L348)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:329](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L329)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqr)*

*Defined in [XcooBeePaymentSDK.ts:151](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L151)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayQrWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqrwithtip)*

*Defined in [XcooBeePaymentSDK.ts:181](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L181)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurl)*

*Defined in [XcooBeePaymentSDK.ts:133](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L133)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayUrlWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurlwithtip)*

*Defined in [XcooBeePaymentSDK.ts:162](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L162)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleItemQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemqr)*

*Defined in [XcooBeePaymentSDK.ts:213](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L213)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleItemUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemurl)*

*Defined in [XcooBeePaymentSDK.ts:195](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L195)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectqr)*

*Defined in [XcooBeePaymentSDK.ts:245](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L245)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselecturl)*

*Defined in [XcooBeePaymentSDK.ts:227](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L227)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:279](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L279)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:260](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L260)*

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

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[getQrGenerator](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#getqrgenerator)*

*Defined in [XcooBeePaymentSDK.ts:79](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L79)*

Returns qr generator if provided

**Returns:** *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

___

###  getUrl

▸ **getUrl**(`flexItems`: [Builder](_builder_.builder.md)[]): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[getUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#geturl)*

*Defined in [XcooBeePaymentSDK.ts:93](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/XcooBeePaymentSDK.ts#L93)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`flexItems` | [Builder](_builder_.builder.md)[] | [] |

**Returns:** *string*
