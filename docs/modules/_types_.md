[payment-sdk](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Interfaces

* [Base64Interface](../interfaces/_types_.base64interface.md)
* [QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)

### Type aliases

* [defaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype)
* [flexItemHumanizedType](_types_.md#flexitemhumanizedtype)
* [flexItemType](_types_.md#flexitemtype)
* [flexLogicType](_types_.md#flexlogictype)
* [listPayUrlConfigType](_types_.md#listpayurlconfigtype)
* [listWithCostPayUrlConfigType](_types_.md#listwithcostpayurlconfigtype)
* [listWithCostType](_types_.md#listwithcosttype)
* [logicReferenceOptionType](_types_.md#logicreferenceoptiontype)
* [logicReferenceType](_types_.md#logicreferencetype)
* [paymentSdkConfigType](_types_.md#paymentsdkconfigtype)
* [qrType](_types_.md#qrtype)
* [simpleListType](_types_.md#simplelisttype)

## Type aliases

###  defaultPayUrlConfigType

Ƭ **defaultPayUrlConfigType**: *object*

*Defined in [types.ts:49](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L49)*

#### Type declaration:

* **amount**? : *number*

* **reference**? : *string*

* **tax**? : *number*

___

###  flexItemHumanizedType

Ƭ **flexItemHumanizedType**: *object*

*Defined in [types.ts:30](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L30)*

#### Type declaration:

* **amount**? : *number*

* **logic**? : *[flexLogicType](_types_.md#flexlogictype) | [flexLogicType](_types_.md#flexlogictype)[]*

* **reference**? : *string*

* **tax**? : *number*

___

###  flexItemType

Ƭ **flexItemType**: *object*

*Defined in [types.ts:23](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L23)*

#### Type declaration:

* **0-3**? : *number*

* **0-5**? : *number*

* **0-6**? : *string*

* **l**? : *[flexLogicType](_types_.md#flexlogictype) | [flexLogicType](_types_.md#flexlogictype)[]*

___

###  flexLogicType

Ƭ **flexLogicType**: *object*

*Defined in [types.ts:15](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L15)*

#### Type declaration:

* **M**? : *number*

* **a**: *[flexPaymentActions](../enums/_config_.flexpaymentactions.md)*

* **m**? : *number*

* **o**? : *number*

* **r**? : *[logicReferenceType](_types_.md#logicreferencetype)*

___

###  listPayUrlConfigType

Ƭ **listPayUrlConfigType**: *[defaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:55](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L55)*

___

###  listWithCostPayUrlConfigType

Ƭ **listWithCostPayUrlConfigType**: *[defaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:57](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L57)*

___

###  listWithCostType

Ƭ **listWithCostType**: *[string, number][]*

*Defined in [types.ts:38](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L38)*

___

###  logicReferenceOptionType

Ƭ **logicReferenceOptionType**: *string | [string, number]*

*Defined in [types.ts:11](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L11)*

___

###  logicReferenceType

Ƭ **logicReferenceType**: *string | [logicReferenceOptionType](_types_.md#logicreferenceoptiontype)[]*

*Defined in [types.ts:13](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L13)*

___

###  paymentSdkConfigType

Ƭ **paymentSdkConfigType**: *object*

*Defined in [types.ts:3](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L3)*

#### Type declaration:

* **campaignId**: *string*

* **deviceId**? : *string*

* **formId**? : *string*

* **source**? : *string*

* **xcoobeeDeviceId**? : *string*

___

###  qrType

Ƭ **qrType**: *string | Promise‹string›*

*Defined in [types.ts:61](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L61)*

___

###  simpleListType

Ƭ **simpleListType**: *string[]*

*Defined in [types.ts:37](https://github.com/XcooBee/payment-sdk-js/blob/f33edaa/src/types.ts#L37)*
