[payment-sdk](../README.md) › [Globals](../globals.md) › ["Combinator"](../modules/_combinator_.md) › [Combinator](_combinator_.combinator.md)

# Class: Combinator

class Combinator

## Hierarchy

* **Combinator**

## Index

### Methods

* [combine](_combinator_.combinator.md#static-combine)
* [combineToJSON](_combinator_.combinator.md#static-combinetojson)

## Methods

### `Static` combine

▸ **combine**(`items`: [Builder](_builder_.builder.md)[]): *[Builder](_builder_.builder.md)[]*

*Defined in [Combinator.ts:15](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Combinator.ts#L15)*

Combines multiple items into one package

**Parameters:**

Name | Type |
------ | ------ |
`items` | [Builder](_builder_.builder.md)[] |

**Returns:** *[Builder](_builder_.builder.md)[]*

___

### `Static` combineToJSON

▸ **combineToJSON**(`items`: [Builder](_builder_.builder.md)[]): *string*

*Defined in [Combinator.ts:42](https://github.com/XcooBee/payment-sdk-js/blob/35979ac/src/Combinator.ts#L42)*

Combines multiple items into one package and converts to JSON string

**Parameters:**

Name | Type |
------ | ------ |
`items` | [Builder](_builder_.builder.md)[] |

**Returns:** *string*
