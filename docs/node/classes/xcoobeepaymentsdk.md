[@xcoobee/payment-sdk](../README.md) › [XcooBeePaymentSDK](xcoobeepaymentsdk.md)

# Class: XcooBeePaymentSDK

class XcooBeePaymentSDK

## Hierarchy

* **XcooBeePaymentSDK**

  ↳ [NodeXcooBeePaymentSDK](nodexcoobeepaymentsdk.md)

## Index

### Constructors

* [constructor](xcoobeepaymentsdk.md#constructor)

### Methods

* [createExternalReferenceQr](xcoobeepaymentsdk.md#createexternalreferenceqr)
* [createExternalReferenceUrl](xcoobeepaymentsdk.md#createexternalreferenceurl)
* [createMultiSelectQr](xcoobeepaymentsdk.md#createmultiselectqr)
* [createMultiSelectUrl](xcoobeepaymentsdk.md#createmultiselecturl)
* [createMultiSelectWithCostQr](xcoobeepaymentsdk.md#createmultiselectwithcostqr)
* [createMultiSelectWithCostUrl](xcoobeepaymentsdk.md#createmultiselectwithcosturl)
* [createPayQr](xcoobeepaymentsdk.md#createpayqr)
* [createPayQrWithTip](xcoobeepaymentsdk.md#createpayqrwithtip)
* [createPayUrl](xcoobeepaymentsdk.md#createpayurl)
* [createPayUrlWithTip](xcoobeepaymentsdk.md#createpayurlwithtip)
* [createSingleItemQr](xcoobeepaymentsdk.md#createsingleitemqr)
* [createSingleItemUrl](xcoobeepaymentsdk.md#createsingleitemurl)
* [createSingleSelectQr](xcoobeepaymentsdk.md#createsingleselectqr)
* [createSingleSelectUrl](xcoobeepaymentsdk.md#createsingleselecturl)
* [createSingleSelectWithCostQr](xcoobeepaymentsdk.md#createsingleselectwithcostqr)
* [createSingleSelectWithCostUrl](xcoobeepaymentsdk.md#createsingleselectwithcosturl)

## Constructors

###  constructor

\+ **new XcooBeePaymentSDK**(`config`: [PaymentSdkConfigType](../README.md#paymentsdkconfigtype), `qrGenerator?`: [QrGeneratorInterface](../interfaces/qrgeneratorinterface.md)): *[XcooBeePaymentSDK](xcoobeepaymentsdk.md)*

*Defined in [XcooBeePaymentSDK.ts:33](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [PaymentSdkConfigType](../README.md#paymentsdkconfigtype) |
`qrGenerator?` | [QrGeneratorInterface](../interfaces/qrgeneratorinterface.md) |

**Returns:** *[XcooBeePaymentSDK](xcoobeepaymentsdk.md)*

## Methods

###  createExternalReferenceQr

▸ **createExternalReferenceQr**(`priceCode`: string, `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:373](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L373)*

Create QR to add single item to basket
Pricing description and image will be loaded from external source using priceCode

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`priceCode` | string | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`priceCode`: string): *string*

*Defined in [XcooBeePaymentSDK.ts:358](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L358)*

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

▸ **createMultiSelectQr**(`config`: [ListPayUrlConfigType](../README.md#listpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:306](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L306)*

Create QR to add single item to basket where user can select multiple additional options from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListPayUrlConfigType](../README.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`config`: [ListPayUrlConfigType](../README.md#listpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:288](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L288)*

Create url to add single item to basket where user can select multiple additional options from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListPayUrlConfigType](../README.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createMultiSelectWithCostQr

▸ **createMultiSelectWithCostQr**(`config`: [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:340](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L340)*

Create QR to add single item to basket where user can select multiple additional options from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createMultiSelectWithCostUrl

▸ **createMultiSelectWithCostUrl**(`config`: [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:321](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L321)*

Create url to add single item to basket where user can select multiple additional options from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype) |

**Returns:** *string*

___

###  createPayQr

▸ **createPayQr**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:143](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L143)*

Create simple payment request QR

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createPayQrWithTip

▸ **createPayQrWithTip**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:173](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L173)*

Create payment request QR with tip

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createPayUrl

▸ **createPayUrl**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:125](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L125)*

Create simple payment request URL

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:154](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L154)*

Create payment request URL with tip

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleItemQr

▸ **createSingleItemQr**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:205](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L205)*

Create QR to add single item to basket where user can enter amount for this item

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`config`: [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:187](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L187)*

Create url to add single item to basket where user can enter amount for this item

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectQr

▸ **createSingleSelectQr**(`config`: [ListPayUrlConfigType](../README.md#listpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:237](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L237)*

Create QR to add single item to basket where user can select one additional option from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListPayUrlConfigType](../README.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`config`: [ListPayUrlConfigType](../README.md#listpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:219](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L219)*

Create url to add single item to basket where user can select one additional option from a list of given options

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListPayUrlConfigType](../README.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectWithCostQr

▸ **createSingleSelectWithCostQr**(`config`: [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Defined in [XcooBeePaymentSDK.ts:271](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L271)*

Create QR to add single item to basket where user can select one additional option from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[QrType](../README.md#qrtype)*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`config`: [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype)): *string*

*Defined in [XcooBeePaymentSDK.ts:252](https://github.com/XcooBee/payment-sdk-js/blob/d9e95c7/src/XcooBeePaymentSDK.ts#L252)*

Create url to add single item to basket where user can select one additional option from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype) |

**Returns:** *string*
