# flatten-json-to-csv

Flatten complex structures and generate CSV using streams!

## Install

```bash
$ npm i --save flatten-json-to-csv
```

## Usage

```js
const flattenJsonToCsv = require("array-flatten.js");
fs.createReadStream("./output.json", { encoding: "utf8" })
  .pipe(flattenJsonToCsv)
  .pipe(fs.createWriteStream("./output.csv", { encoding: "utf8" }));
// generates a output.csv with converted json, sample files attached
```

#### Released under MIT License
