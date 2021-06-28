# get-interpolated-string
Compile handlebars templates using interpolated strings!

## Install 

```bash
$ npm i --save get-interpolated-string
```

## Usage

```js
const getInterpolatedString = require('get-interpolated-string');
console.log(getInterpolatedString("First: {{first_name}} | Last: {{last_name}}", {first_name: "Sambhav". "last_name": "Jain"})); // First: Sambhav | Last: Jain
```

Released under MIT License