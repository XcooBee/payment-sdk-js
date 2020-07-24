[@xcoobee/payment-sdk](../README.md) › [NodeXcooBeePaymentSDK](nodexcoobeepaymentsdk.md)

# Class: NodeXcooBeePaymentSDK

Wrapper for Node
Provides implementations for Base64Interface and QrGeneratorInterface

## Hierarchy

* [XcooBeePaymentSDK](xcoobeepaymentsdk.md)

  ↳ **NodeXcooBeePaymentSDK**

## Index

### Constructors

* [constructor](nodexcoobeepaymentsdk.md#constructor)

### Methods

* [createExternalReferenceQr](nodexcoobeepaymentsdk.md#createexternalreferenceqr)
* [createExternalReferenceUrl](nodexcoobeepaymentsdk.md#createexternalreferenceurl)
* [createMultiSelectQr](nodexcoobeepaymentsdk.md#createmultiselectqr)
* [createMultiSelectUrl](nodexcoobeepaymentsdk.md#createmultiselecturl)
* [createMultiSelectWithCostQr](nodexcoobeepaymentsdk.md#createmultiselectwithcostqr)
* [createMultiSelectWithCostUrl](nodexcoobeepaymentsdk.md#createmultiselectwithcosturl)
* [createPayQr](nodexcoobeepaymentsdk.md#createpayqr)
* [createPayQrWithTip](nodexcoobeepaymentsdk.md#createpayqrwithtip)
* [createPayUrl](nodexcoobeepaymentsdk.md#createpayurl)
* [createPayUrlWithTip](nodexcoobeepaymentsdk.md#createpayurlwithtip)
* [createSingleItemQr](nodexcoobeepaymentsdk.md#createsingleitemqr)
* [createSingleItemUrl](nodexcoobeepaymentsdk.md#createsingleitemurl)
* [createSingleSelectQr](nodexcoobeepaymentsdk.md#createsingleselectqr)
* [createSingleSelectUrl](nodexcoobeepaymentsdk.md#createsingleselecturl)
* [createSingleSelectWithCostQr](nodexcoobeepaymentsdk.md#createsingleselectwithcostqr)
* [createSingleSelectWithCostUrl](nodexcoobeepaymentsdk.md#createsingleselectwithcosturl)

## Constructors

###  constructor

\+ **new NodeXcooBeePaymentSDK**(`config`: [PaymentSdkConfigType](../README.md#paymentsdkconfigtype)): *[NodeXcooBeePaymentSDK](nodexcoobeepaymentsdk.md)*

*Overrides [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[constructor](xcoobeepaymentsdk.md#constructor)*

*Defined in [node.ts:45](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/node.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [PaymentSdkConfigType](../README.md#paymentsdkconfigtype) |

**Returns:** *[NodeXcooBeePaymentSDK](nodexcoobeepaymentsdk.md)*

## Methods

###  createExternalReferenceQr

▸ **createExternalReferenceQr**(`priceCode`: string, `size`: number): *[QrType](../README.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createExternalReferenceQr](xcoobeepaymentsdk.md#createexternalreferenceqr)*

*Defined in [XcooBeePaymentSDK.ts:373](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L373)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createExternalReferenceUrl](xcoobeepaymentsdk.md#createexternalreferenceurl)*

*Defined in [XcooBeePaymentSDK.ts:358](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L358)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createMultiSelectQr](xcoobeepaymentsdk.md#createmultiselectqr)*

*Defined in [XcooBeePaymentSDK.ts:306](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L306)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createMultiSelectUrl](xcoobeepaymentsdk.md#createmultiselecturl)*

*Defined in [XcooBeePaymentSDK.ts:288](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L288)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createMultiSelectWithCostQr](xcoobeepaymentsdk.md#createmultiselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:340](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L340)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createMultiSelectWithCostUrl](xcoobeepaymentsdk.md#createmultiselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:321](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L321)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createPayQr](xcoobeepaymentsdk.md#createpayqr)*

*Defined in [XcooBeePaymentSDK.ts:143](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L143)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createPayQrWithTip](xcoobeepaymentsdk.md#createpayqrwithtip)*

*Defined in [XcooBeePaymentSDK.ts:173](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L173)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createPayUrl](xcoobeepaymentsdk.md#createpayurl)*

*Defined in [XcooBeePaymentSDK.ts:125](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L125)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createPayUrlWithTip](xcoobeepaymentsdk.md#createpayurlwithtip)*

*Defined in [XcooBeePaymentSDK.ts:154](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L154)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleItemQr](xcoobeepaymentsdk.md#createsingleitemqr)*

*Defined in [XcooBeePaymentSDK.ts:205](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L205)*

Create QR to add single item to basket

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleItemUrl](xcoobeepaymentsdk.md#createsingleitemurl)*

*Defined in [XcooBeePaymentSDK.ts:187](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L187)*

Create url to add single item to basket

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DefaultPayUrlConfigType](../README.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectQr

▸ **createSingleSelectQr**(`config`: [ListPayUrlConfigType](../README.md#listpayurlconfigtype), `size`: number): *[QrType](../README.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleSelectQr](xcoobeepaymentsdk.md#createsingleselectqr)*

*Defined in [XcooBeePaymentSDK.ts:237](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L237)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleSelectUrl](xcoobeepaymentsdk.md#createsingleselecturl)*

*Defined in [XcooBeePaymentSDK.ts:219](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L219)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleSelectWithCostQr](xcoobeepaymentsdk.md#createsingleselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:271](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L271)*

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

*Inherited from [XcooBeePaymentSDK](xcoobeepaymentsdk.md).[createSingleSelectWithCostUrl](xcoobeepaymentsdk.md#createsingleselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:252](https://github.com/XcooBee/payment-sdk-js/blob/53db2cc/src/XcooBeePaymentSDK.ts#L252)*

Create url to add single item to basket where user can select one additional option from a list of given options
Each option can have extra price

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [ListWithCostPayUrlConfigType](../README.md#listwithcostpayurlconfigtype) |

**Returns:** *string*
