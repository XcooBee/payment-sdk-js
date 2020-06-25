[@xcoobee/payment-sdk](../README.md) › [Globals](../globals.md) › ["Builder"](../modules/_builder_.md) › [Builder](_builder_.builder.md)

# Class: Builder

## Hierarchy

* **Builder**

## Index

### Constructors

* [constructor](_builder_.builder.md#constructor)

### Properties

* [amount](_builder_.builder.md#private-optional-amount)
* [logic](_builder_.builder.md#private-logic)
* [reference](_builder_.builder.md#private-optional-reference)
* [tax](_builder_.builder.md#private-optional-tax)

### Methods

* [addCheckboxes](_builder_.builder.md#addcheckboxes)
* [addCheckboxesWithCost](_builder_.builder.md#addcheckboxeswithcost)
* [addLogic](_builder_.builder.md#addlogic)
* [addPercentageOrMax](_builder_.builder.md#addpercentageormax)
* [addPercentageOrMin](_builder_.builder.md#addpercentageormin)
* [addRadio](_builder_.builder.md#addradio)
* [addRadioWithCost](_builder_.builder.md#addradiowithcost)
* [clearLogic](_builder_.builder.md#clearlogic)
* [fromRaw](_builder_.builder.md#fromraw)
* [getKey](_builder_.builder.md#getkey)
* [hasAction](_builder_.builder.md#hasaction)
* [makeExternal](_builder_.builder.md#makeexternal)
* [makeTip](_builder_.builder.md#maketip)
* [makeTotal](_builder_.builder.md#maketotal)
* [makeUserEntry](_builder_.builder.md#makeuserentry)
* [setAmount](_builder_.builder.md#setamount)
* [setReference](_builder_.builder.md#setreference)
* [setTax](_builder_.builder.md#settax)
* [toJSON](_builder_.builder.md#tojson)
* [validate](_builder_.builder.md#validate)
* [validateLogic](_builder_.builder.md#static-validatelogic)

## Constructors

###  constructor

\+ **new Builder**(`config?`: [FlexItemHumanizedType](../modules/_types_.md#flexitemhumanizedtype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:123](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [FlexItemHumanizedType](../modules/_types_.md#flexitemhumanizedtype) |

**Returns:** *[Builder](_builder_.builder.md)*

## Properties

### `Private` `Optional` amount

• **amount**? : *number*

*Defined in [Builder.ts:23](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L23)*

___

### `Private` logic

• **logic**: *[FlexLogicType](../modules/_types_.md#flexlogictype)[]* = []

*Defined in [Builder.ts:26](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L26)*

___

### `Private` `Optional` reference

• **reference**? : *string*

*Defined in [Builder.ts:25](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L25)*

___

### `Private` `Optional` tax

• **tax**? : *number*

*Defined in [Builder.ts:24](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L24)*

## Methods

###  addCheckboxes

▸ **addCheckboxes**(`options`: [SimpleListType](../modules/_types_.md#simplelisttype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:420](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L420)*

Adds list with additions options inside current item to choose any of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SimpleListType](../modules/_types_.md#simplelisttype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addCheckboxesWithCost

▸ **addCheckboxesWithCost**(`options`: [ListWithCostType](../modules/_types_.md#listwithcosttype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:431](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L431)*

Adds list with additions options, with extra cost for each, inside current item to choose any of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ListWithCostType](../modules/_types_.md#listwithcosttype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addLogic

▸ **addLogic**(`item`: [FlexLogicType](../modules/_types_.md#flexlogictype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:256](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L256)*

Adds logic to current item

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`item` | [FlexLogicType](../modules/_types_.md#flexlogictype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addPercentageOrMax

▸ **addPercentageOrMax**(`config`: object): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:378](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L378)*

Adds extra item to basket, for which amount is calculated based on total basket amount
Can be used for taxes or extra fees e.t.c.
At least one of percentage|max must be provided
percentage should be given in range [-1:1]
max is fixed amount

**Parameters:**

▪ **config**: *object*

Name | Type |
------ | ------ |
`max?` | number |
`percentage?` | number |
`reference` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addPercentageOrMin

▸ **addPercentageOrMin**(`config`: object): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:352](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L352)*

Adds extra item to basket, for which amount is calculated based on total basket amount
Can be used for taxes or extra fees e.t.c.
At least one of percentage|min must be provided
percentage should be given in range [-1:1]
min is fixed amount

**Parameters:**

▪ **config**: *object*

Name | Type |
------ | ------ |
`min?` | number |
`percentage?` | number |
`reference` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addRadio

▸ **addRadio**(`options`: [SimpleListType](../modules/_types_.md#simplelisttype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:398](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L398)*

Adds list with additions options inside current item to choose one of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SimpleListType](../modules/_types_.md#simplelisttype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addRadioWithCost

▸ **addRadioWithCost**(`options`: [ListWithCostType](../modules/_types_.md#listwithcosttype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:409](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L409)*

Adds list with additions options, with extra cost for each, inside current item to choose one of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ListWithCostType](../modules/_types_.md#listwithcosttype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  clearLogic

▸ **clearLogic**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:294](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L294)*

Clears logic for current item

**Returns:** *[Builder](_builder_.builder.md)*

___

###  fromRaw

▸ **fromRaw**(`config`: [FlexItemType](../modules/_types_.md#flexitemtype)): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:180](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L180)*

Populates data from raw data package

**Parameters:**

Name | Type |
------ | ------ |
`config` | [FlexItemType](../modules/_types_.md#flexitemtype) |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  getKey

▸ **getKey**(): *string*

*Defined in [Builder.ts:140](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L140)*

**Returns:** *string*

___

###  hasAction

▸ **hasAction**(`action`: [FlexPaymentActions](../enums/_types_.flexpaymentactions.md)): *boolean*

*Defined in [Builder.ts:200](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L200)*

Checks whether current item has given action

**Parameters:**

Name | Type |
------ | ------ |
`action` | [FlexPaymentActions](../enums/_types_.flexpaymentactions.md) |

**Returns:** *boolean*

___

###  makeExternal

▸ **makeExternal**(`priceCode`: string): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:335](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L335)*

Loads pricing\description\image\logic from external source using `priceCode`

**Parameters:**

Name | Type |
------ | ------ |
`priceCode` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeTip

▸ **makeTip**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:305](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L305)*

Makes current item a tip item
This will render separte item in basket with tip inputs

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeTotal

▸ **makeTotal**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:316](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L316)*

Makes current item a total item
This item will replace all current basket with it
Can be used with Tip

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeUserEntry

▸ **makeUserEntry**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:325](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L325)*

Allows user to enter amount for this item

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setAmount

▸ **setAmount**(`amount`: number): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:149](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L149)*

Sets an amount

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setReference

▸ **setReference**(`reference`: string): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:169](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L169)*

Sets reference

**Parameters:**

Name | Type |
------ | ------ |
`reference` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setTax

▸ **setTax**(`tax`: number): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:159](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L159)*

Sets tax

**Parameters:**

Name | Type |
------ | ------ |
`tax` | number |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  toJSON

▸ **toJSON**(): *[FlexItemType](../modules/_types_.md#flexitemtype)*

*Defined in [Builder.ts:444](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L444)*

Validates and transforms builder instance into object

**`throws`** {Error}

**Returns:** *[FlexItemType](../modules/_types_.md#flexitemtype)*

___

###  validate

▸ **validate**(): *string | null*

*Defined in [Builder.ts:209](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L209)*

Validates requirements for amount\tax\reference fields

**Returns:** *string | null*

- returns error text or null

___

### `Static` validateLogic

▸ **validateLogic**(`logic`: [FlexLogicType](../modules/_types_.md#flexlogictype)): *string | null*

*Defined in [Builder.ts:34](https://github.com/XcooBee/payment-sdk-js/blob/c035332/src/Builder.ts#L34)*

Validates single logic item

**Parameters:**

Name | Type |
------ | ------ |
`logic` | [FlexLogicType](../modules/_types_.md#flexlogictype) |

**Returns:** *string | null*
