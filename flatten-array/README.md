# unflatten

Flatten complex structures including arrays and objects!

## Install

```bash
$ npm i --save flatten-array
```

## Usage

```js
const complexData = [
  {
    email: "sambhavjain2612@gmail.com",
    name: { first: "Sambhav", last: "Jain" },
    meta: { status: "ACTIVE", permissionsGranted: true },
  },
  {
    skills: [
      { category: "Frontend", value: "React.js" },
      { category: "Backend", value: "Node.js" },
    ],
  },
];
const flattenArray = require("flatten-array");
flattenArray(complexData);

/* logs ->
{
  "[0].email": "sambhavjain2612@gmail.com",
  "[0].name.first": "Sambhav",
  "[0].name.last": "Jain",
  "[0].meta.status": "ACTIVE",
  "[0].meta.permissionsGranted": true,
  "[1].skills[0].category": "Frontend",
  "[1].skills[0].value": "React.js",
  "[1].skills[1].category": "Backend",
  "[1].skills[1].value": "Node.js",
}
*/
```

#### Released under MIT License
