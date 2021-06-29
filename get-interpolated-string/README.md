# get-interpolated-string

Compile handlebars templates using interpolated strings!

## Install

```bash
$ npm i --save get-interpolated-string
```

## Usage

```js
const getInterpolatedString = require("get-interpolated-string");
getInterpolatedString("First: {{first}} | Last: {{last}}", {
  first: "Sambhav",
  last: "Jain",
}); // First: Sambhav | Last: Jain
```

#### Released under MIT License
