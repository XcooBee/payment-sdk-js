[payment-sdk](../README.md) › [Globals](../globals.md) › ["node"](_node_.md)

# Module: "node"

## Index

### Classes

* [NodeXcooBeePaymentSDK](../classes/_node_.nodexcoobeepaymentsdk.md)

### Object literals

* [base64](_node_.md#const-base64)
* [qrGenerator](_node_.md#const-qrgenerator)

## Object literals

### `Const` base64

### ▪ **base64**: *object*

*Defined in [node.ts:12](https://github.com/XcooBee/payment-sdk-js/blob/279407d/src/node.ts#L12)*

Implements node version of Base64Interface to manipulate base64 strings

**`implements`** Base64Interface

###  atob

▸ **atob**(`str`: string): *string*

*Defined in [node.ts:13](https://github.com/XcooBee/payment-sdk-js/blob/279407d/src/node.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

###  btoa

▸ **btoa**(`str`: string): *string*

*Defined in [node.ts:14](https://github.com/XcooBee/payment-sdk-js/blob/279407d/src/node.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Const` qrGenerator

### ▪ **qrGenerator**: *object*

*Defined in [node.ts:22](https://github.com/XcooBee/payment-sdk-js/blob/279407d/src/node.ts#L22)*

Implements node version of QrGeneratorInterface to generate QRs

**`implements`** QrGeneratorInterface

###  generate

▸ **generate**(`url`: string, `size`: number): *Promise‹string›*

*Defined in [node.ts:23](https://github.com/XcooBee/payment-sdk-js/blob/279407d/src/node.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`size` | number |

**Returns:** *Promise‹string›*
