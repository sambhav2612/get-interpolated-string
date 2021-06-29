# mongo-utils

Small and injectable mongodb utils!

## Install

```bash
$ npm i --save mongo-utils.js
```

## Usage

```js
// 1. Reduce Array of Strings to String: prop = ["Sambhav", "Jain"] --> prop = "Sambhav, Jain"
const { reduceMongoArrayToString } = require("mongo-utils.js");
db.model.aggregate([
  {
    $project: {
      prop: reduceMongoArrayToString("prop"),
    },
  },
]);

// 2. Cast String to Number while comaparing in query:
// prop2 = "30", query = Find all records with prop2 >= 10
const { castStringToNumberInQuery } = require("mongo-utils.js");
db.model.find({ prop2: castStringToNumberInQuery("$gte", 10, "Int", "prop2") });
```

### Caveats

- castStringToNumberInQuery
  - Property under comparison must have numeric value stored as String for this to work
  - convertorType (second param) should belong to these values: Decimal, Int, Double, Long

#### Released under MIT License
