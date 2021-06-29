const Stream = require("stream");
const flattenArray = require("array-flatten.js");
const stream = new Stream.Transform({ objectMode: true, highWaterMark: 20000 });

stream._transform = function (chunk, encoding, done) {
  done(
    null,
    Buffer.from(JSON.stringify(flattenArray(JSON.parse(chunk.toString()))))
  );
};

stream.on("error", (err) => {
  throw new Error(err.message);
  stream.destroy();
});

stream.on("end", () => {
  console.log("JSON to CSV flattened and converted!");
  stream.destroy();
});

module.exports = stream;
