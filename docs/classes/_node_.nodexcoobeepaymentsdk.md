[payment-sdk](../README.md) › [Globals](../globals.md) › ["node"](../modules/_node_.md) › [NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)

# Class: NodeXcooBeePaymentSDK

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

\+ **new NodeXcooBeePaymentSDK**(`config`: [paymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype)): *[NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)*

*Overrides [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[constructor](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#constructor)*

*Defined in [node.ts:38](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/node.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [paymentSdkConfigType](../modules/_types_.md#paymentsdkconfigtype) |

**Returns:** *[NodeXcooBeePaymentSDK](_node_.nodexcoobeepaymentsdk.md)*

## Methods

###  createExternalReferenceQr

▸ **createExternalReferenceQr**(`priceCode`: string, `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createExternalReferenceQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceqr)*

*Defined in [XcooBeePaymentSDK.ts:262](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L262)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`priceCode` | string | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createExternalReferenceUrl

▸ **createExternalReferenceUrl**(`priceCode`: string): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createExternalReferenceUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createexternalreferenceurl)*

*Defined in [XcooBeePaymentSDK.ts:256](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L256)*

**Parameters:**

Name | Type |
------ | ------ |
`priceCode` | string |

**Returns:** *string*

___

###  createMultiSelectQr

▸ **createMultiSelectQr**(`config`: [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectqr)*

*Defined in [XcooBeePaymentSDK.ts:229](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L229)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createMultiSelectUrl

▸ **createMultiSelectUrl**(`config`: [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselecturl)*

*Defined in [XcooBeePaymentSDK.ts:219](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L219)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createMultiSelectWithCostQr

▸ **createMultiSelectWithCostQr**(`config`: [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:246](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L246)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createMultiSelectWithCostUrl

▸ **createMultiSelectWithCostUrl**(`config`: [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createMultiSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createmultiselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:236](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) |

**Returns:** *string*

___

###  createPayQr

▸ **createPayQr**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqr)*

*Defined in [XcooBeePaymentSDK.ts:143](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L143)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createPayQrWithTip

▸ **createPayQrWithTip**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayQrWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayqrwithtip)*

*Defined in [XcooBeePaymentSDK.ts:158](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L158)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createPayUrl

▸ **createPayUrl**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurl)*

*Defined in [XcooBeePaymentSDK.ts:133](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L133)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createPayUrlWithTip

▸ **createPayUrlWithTip**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createPayUrlWithTip](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurlwithtip)*

*Defined in [XcooBeePaymentSDK.ts:147](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleItemQr

▸ **createSingleItemQr**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleItemQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemqr)*

*Defined in [XcooBeePaymentSDK.ts:175](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L175)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createSingleItemUrl

▸ **createSingleItemUrl**(`config`: [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleItemUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleitemurl)*

*Defined in [XcooBeePaymentSDK.ts:165](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [defaultPayUrlConfigType](../modules/_types_.md#defaultpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectQr

▸ **createSingleSelectQr**(`config`: [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectqr)*

*Defined in [XcooBeePaymentSDK.ts:192](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L192)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createSingleSelectUrl

▸ **createSingleSelectUrl**(`config`: [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselecturl)*

*Defined in [XcooBeePaymentSDK.ts:182](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [listPayUrlConfigType](../modules/_types_.md#listpayurlconfigtype) |

**Returns:** *string*

___

###  createSingleSelectWithCostQr

▸ **createSingleSelectWithCostQr**(`config`: [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype), `size`: number): *[qrType](../modules/_types_.md#qrtype)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectWithCostQr](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcostqr)*

*Defined in [XcooBeePaymentSDK.ts:209](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L209)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) | - |
`size` | number | defaultQrSize |

**Returns:** *[qrType](../modules/_types_.md#qrtype)*

___

###  createSingleSelectWithCostUrl

▸ **createSingleSelectWithCostUrl**(`config`: [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype)): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[createSingleSelectWithCostUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createsingleselectwithcosturl)*

*Defined in [XcooBeePaymentSDK.ts:199](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [listWithCostPayUrlConfigType](../modules/_types_.md#listwithcostpayurlconfigtype) |

**Returns:** *string*

___

###  getQrGenerator

▸ **getQrGenerator**(): *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[getQrGenerator](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#getqrgenerator)*

*Defined in [XcooBeePaymentSDK.ts:79](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L79)*

Returns qr generator if provided

**Returns:** *[QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)*

___

###  getUrl

▸ **getUrl**(`flexItems`: [Builder](_builder_.builder.md)[]): *string*

*Inherited from [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md).[getUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#geturl)*

*Defined in [XcooBeePaymentSDK.ts:93](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/XcooBeePaymentSDK.ts#L93)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`flexItems` | [Builder](_builder_.builder.md)[] | [] |

**Returns:** *string*
