[@xcoobee/payment-sdk](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Enumerations

* [FlexPaymentActions](../enums/_types_.flexpaymentactions.md)

### Interfaces

* [Base64Interface](../interfaces/_types_.base64interface.md)
* [QrGeneratorInterface](../interfaces/_types_.qrgeneratorinterface.md)

### Type aliases

* [DefaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype)
* [FlexItemHumanizedType](_types_.md#flexitemhumanizedtype)
* [FlexItemType](_types_.md#flexitemtype)
* [FlexLogicType](_types_.md#flexlogictype)
* [ListPayUrlConfigType](_types_.md#listpayurlconfigtype)
* [ListWithCostPayUrlConfigType](_types_.md#listwithcostpayurlconfigtype)
* [ListWithCostType](_types_.md#listwithcosttype)
* [LogicReferenceOptionType](_types_.md#logicreferenceoptiontype)
* [LogicReferenceType](_types_.md#logicreferencetype)
* [PaymentSdkConfigType](_types_.md#paymentsdkconfigtype)
* [QrType](_types_.md#qrtype)
* [SimpleListType](_types_.md#simplelisttype)

## Type aliases

###  DefaultPayUrlConfigType

Ƭ **DefaultPayUrlConfigType**: *object*

*Defined in [types.ts:58](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L58)*

#### Type declaration:

* **amount**? : *number*

* **reference**? : *string*

* **tax**? : *number*

___

###  FlexItemHumanizedType

Ƭ **FlexItemHumanizedType**: *[DefaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:41](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L41)*

___

###  FlexItemType

Ƭ **FlexItemType**: *object*

*Defined in [types.ts:34](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L34)*

#### Type declaration:

* **0-3**? : *number*

* **0-5**? : *number*

* **0-6**? : *string*

* **l**? : *[FlexLogicType](_types_.md#flexlogictype) | [FlexLogicType](_types_.md#flexlogictype)[]*

___

###  FlexLogicType

Ƭ **FlexLogicType**: *object*

*Defined in [types.ts:26](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L26)*

#### Type declaration:

* **M**? : *number*

* **a**: *[FlexPaymentActions](../enums/_types_.flexpaymentactions.md)*

* **m**? : *number*

* **o**? : *number*

* **r**? : *[LogicReferenceType](_types_.md#logicreferencetype)*

___

###  ListPayUrlConfigType

Ƭ **ListPayUrlConfigType**: *[DefaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:64](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L64)*

___

###  ListWithCostPayUrlConfigType

Ƭ **ListWithCostPayUrlConfigType**: *[DefaultPayUrlConfigType](_types_.md#defaultpayurlconfigtype) & object*

*Defined in [types.ts:66](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L66)*

___

###  ListWithCostType

Ƭ **ListWithCostType**: *[string, number][]*

*Defined in [types.ts:46](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L46)*

___

###  LogicReferenceOptionType

Ƭ **LogicReferenceOptionType**: *string | [string, number]*

*Defined in [types.ts:22](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L22)*

___

###  LogicReferenceType

Ƭ **LogicReferenceType**: *string | [SimpleListType](_types_.md#simplelisttype) | [ListWithCostType](_types_.md#listwithcosttype)*

*Defined in [types.ts:24](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L24)*

___

###  PaymentSdkConfigType

Ƭ **PaymentSdkConfigType**: *object*

*Defined in [types.ts:14](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L14)*

#### Type declaration:

* **campaignId**: *string*

* **deviceId**? : *string*

* **formId**? : *string*

* **source**? : *string*

* **xcoobeeDeviceId**? : *string*

___

###  QrType

Ƭ **QrType**: *string | Promise‹string›*

*Defined in [types.ts:70](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L70)*

___

###  SimpleListType

Ƭ **SimpleListType**: *string[]*

*Defined in [types.ts:45](https://github.com/XcooBee/payment-sdk-js/blob/445d690/src/types.ts#L45)*
