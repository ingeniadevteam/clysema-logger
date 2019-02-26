# @clysema/logger

[![npm (scoped)](https://img.shields.io/npm/v/@clysema/logger.svg)](https://www.npmjs.com/package/@clysema/logger)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@clysema/logger.svg)](https://www.npmjs.com/package/@clysema/logger)

Removes all spaces from a string.

## Install

```
$ npm install @clysema/logger
```

## Usage

```js
const logger = require("@clysema/logger");

logger("So much space!");
//=> "Somuchspace!"

logger(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at logger (<anonymous>:2:41)
//    at <anonymous>:1:1
```
