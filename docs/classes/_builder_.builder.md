[payment-sdk](../README.md) › [Globals](../globals.md) › ["Builder"](../modules/_builder_.md) › [Builder](_builder_.builder.md)

# Class: Builder

## Hierarchy

* **Builder**

## Index

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

## Methods

###  addCheckboxes

▸ **addCheckboxes**(`options`: simpleListType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:411](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L411)*

Adds list with additions options inside current item to choose any of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | simpleListType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addCheckboxesWithCost

▸ **addCheckboxesWithCost**(`options`: listWithCostType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:422](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L422)*

Adds list with additions options, with extra cost for each, inside current item to choose any of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | listWithCostType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addLogic

▸ **addLogic**(`item`: flexLogicType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:247](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L247)*

Adds logic to current item

**`throws`** {Error}

**Parameters:**

Name | Type |
------ | ------ |
`item` | flexLogicType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addPercentageOrMax

▸ **addPercentageOrMax**(`config`: object): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:369](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L369)*

Adds extra item to basket, for which amount is calculated based on total basket amount
Can be used for taxes or extra fees e.t.c.
At least one of percentage|max must be provided
percentage should be given in range [-1:1]
max is fixed amount

**Parameters:**

Name | Type |
------ | ------ |
`config` | object |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addPercentageOrMin

▸ **addPercentageOrMin**(`config`: object): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:343](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L343)*

Adds extra item to basket, for which amount is calculated based on total basket amount
Can be used for taxes or extra fees e.t.c.
At least one of percentage|min must be provided
percentage should be given in range [-1:1]
min is fixed amount

**Parameters:**

Name | Type |
------ | ------ |
`config` | object |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addRadio

▸ **addRadio**(`options`: simpleListType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:389](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L389)*

Adds list with additions options inside current item to choose one of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | simpleListType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  addRadioWithCost

▸ **addRadioWithCost**(`options`: listWithCostType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:400](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L400)*

Adds list with additions options, with extra cost for each, inside current item to choose one of them

**Parameters:**

Name | Type |
------ | ------ |
`options` | listWithCostType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  clearLogic

▸ **clearLogic**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:285](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L285)*

Clears logic for current item

**Returns:** *[Builder](_builder_.builder.md)*

___

###  fromRaw

▸ **fromRaw**(`config`: flexItemType): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:172](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L172)*

Populates data from raw data package

**Parameters:**

Name | Type |
------ | ------ |
`config` | flexItemType |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  hasAction

▸ **hasAction**(`action`: flexPaymentActions): *boolean*

*Defined in [Builder.ts:191](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L191)*

Checks whether current item has given action

**Parameters:**

Name | Type |
------ | ------ |
`action` | flexPaymentActions |

**Returns:** *boolean*

___

###  makeExternal

▸ **makeExternal**(`priceCode`: string): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:326](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L326)*

Loads pricing\description\image\logic from external source using `priceCode`

**Parameters:**

Name | Type |
------ | ------ |
`priceCode` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeTip

▸ **makeTip**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:296](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L296)*

Makes current item a tip item
This will render separte item in basket with tip inputs

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeTotal

▸ **makeTotal**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:307](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L307)*

Makes current item a total item
This item will replace all current basket with it
Can be used with Tip

**Returns:** *[Builder](_builder_.builder.md)*

___

###  makeUserEntry

▸ **makeUserEntry**(): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:316](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L316)*

Allows user to enter amount for this item

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setAmount

▸ **setAmount**(`amount`: number): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:141](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L141)*

Sets an amount

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setReference

▸ **setReference**(`reference`: string): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:161](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L161)*

Sets reference

**Parameters:**

Name | Type |
------ | ------ |
`reference` | string |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  setTax

▸ **setTax**(`tax`: number): *[Builder](_builder_.builder.md)*

*Defined in [Builder.ts:151](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L151)*

Sets tax

**Parameters:**

Name | Type |
------ | ------ |
`tax` | number |

**Returns:** *[Builder](_builder_.builder.md)*

___

###  toJSON

▸ **toJSON**(): *flexItemType*

*Defined in [Builder.ts:435](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L435)*

Validates and transforms builder instance into object

**`throws`** {Error}

**Returns:** *flexItemType*

___

###  validate

▸ **validate**(): *string | null*

*Defined in [Builder.ts:200](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L200)*

Validates requirements for amount\tax\reference fields

**Returns:** *string | null*

- returns error text or null

___

### `Static` validateLogic

▸ **validateLogic**(`logic`: flexLogicType): *string | null*

*Defined in [Builder.ts:34](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Builder.ts#L34)*

Validates single logic item

**Parameters:**

Name | Type |
------ | ------ |
`logic` | flexLogicType |

**Returns:** *string | null*
