# XcooBee Contactless Payment SDK for JavaScript

## Description

The XcooBee contactless payment system is a complete shopping cart and checkout system that can be included in your projects (mobile or web) quickly. In order to fully use this, you will need a XcooBee account ( Professional, Business, or Enterprise) and an active “Payment Project” created.

The SDK simplifies the generation of URLs and QRs. Smart QRs and URLs can cover many different use cases.

The URLs can be sent to remote users or embedded in a website to quickly add a shopping cart system with a few lines. Examples of this could be "Pay" buttons or "Add to Cart" links for merchandise that is sold on the site.

The URLs can help you build a very simply shopping system that is focused on cart and checkout. Nothing else is needed.

Touchless smart QRs can be used with users that are directly in vicinity of your app or to start a shopping/payment process from physical media like signs and printed materials. Examples of this would include restaurant menus, flyers, catalogs, books, invoices, statements, etc..

## Installation

### Node

```
npm i @xcoobee/payment-sdk easyqrcodejs-nodejs
```

### Web

```
npm i @xcoobee/payment-sdk easyqrcodejs
```

To use without QR generator or to provide your own please use this [link](note.md)

## Documentation

See the [complete documentation here](docs/globals.md).

## Deployment

```
npm run build
```

## Tests

```
npm test
```

or

```
npm run coverage
```
