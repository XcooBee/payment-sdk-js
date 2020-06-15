[payment-sdk](../README.md) › [Globals](../globals.md) › ["XcooBeePaymentSDK"](../modules/_xcoobeepaymentsdk_.md) › [XcooBeePaymentSDK](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md)

# Class: XcooBeePaymentSDK

class XcooBeePaymentSDK

## Hierarchy

* **XcooBeePaymentSDK**

## Index

### Methods

* [createPayUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#createpayurl)
* [getQrGenerator](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#getqrgenerator)
* [getUrl](_xcoobeepaymentsdk_.xcoobeepaymentsdk.md#geturl)

## Methods

###  createPayUrl

▸ **createPayUrl**(`config`: defaultPayUrlConfigType): *string*

*Defined in [XcooBeePaymentSDK.ts:133](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/XcooBeePaymentSDK.ts#L133)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`config` | defaultPayUrlConfigType |

**Returns:** *string*

___

###  getQrGenerator

▸ **getQrGenerator**(): *QrGeneratorInterface*

*Defined in [XcooBeePaymentSDK.ts:79](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/XcooBeePaymentSDK.ts#L79)*

Returns qr generator if provided

**Returns:** *QrGeneratorInterface*

___

###  getUrl

▸ **getUrl**(`flexItems`: [Builder](_builder_.builder.md)[]): *string*

*Defined in [XcooBeePaymentSDK.ts:93](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/XcooBeePaymentSDK.ts#L93)*

Converts data package to url

**`throws`** {Error}

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`flexItems` | [Builder](_builder_.builder.md)[] | [] |

**Returns:** *string*
