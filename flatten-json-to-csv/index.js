const Stream = require("stream");
const flattenArray = require("array-flatten.js");
const unflattenArray = require("array-unflatten.js");

function generateCsvString(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      if (typeof array[i][index] === "object") {
        if (array[i][index] instanceof Array) {
          line += Array.from(array[i][index]).map((ele) =>
            Object.keys(ele).map((item) => ele[item])
          );
        } else {
          line += Object.keys(array[i][index]).map(
            (key) => array[i][index][key]
          );
        }
      } else {
        line += array[i][index];
      }
    }

    str += line + "\r\n";
  }

  return str;
}

const transformToJson = new Stream.Transform({
  objectMode: true,
  highWaterMark: 20000,
});
const transformToCsv = new Stream.Transform({ highWaterMark: 20000 });

transformToJson._transform = function (chunk, encoding, done) {
  done(
    null,
    Buffer.from(JSON.stringify(flattenArray(JSON.parse(chunk.toString()))))
  );
};

transformToJson.on("error", (err) => {
  throw new Error(err.message);
  transformToJson.destroy();
});

transformToJson.on("end", () => {
  transformToJson.destroy();
});

transformToCsv._transform = function (chunk, encoding, done) {
  let csvString = null,
    data = JSON.parse(chunk.toString());
  const header = Object.keys(data).join(",");
  csvString += header + "\r\n" + generateCsvString(unflattenArray(data));
  this.push(csvString);
  done();
};

transformToCsv.on("error", (err) => {
  throw new Error(err.message);
  transformToCsv.destroy();
});

transformToCsv.on("end", () => {
  console.log("JSON to CSV converted!");
  transformToCsv.destroy();
});

module.exports = {
  transformToJson,
  transformToCsv,
  generateCsvString,
};
