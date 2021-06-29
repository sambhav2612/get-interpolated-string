# flatten-json-to-csv

Flatten complex structures and generate CSV using streams!

## Install

```bash
$ npm i --save flatten-json-to-csv
```

## Usage

```js
const { transformToJson, transformToCsv } = require("flatten-json-to-csv");
fs.createReadStream("./output.json", { encoding: "utf8" })
  .pipe(transformToJson)
  .pipe(transformToCsv)
  .pipe(fs.createWriteStream("./output.csv", { encoding: "utf8" }));
```

## Caveat

Currently limited upto second-level nesting

#### Released under MIT License
