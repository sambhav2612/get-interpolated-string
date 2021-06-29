module.exports = {
  reduceMongoArrayToString: function (property) {
    return {
      $reduce: {
        input: `$${property}`,
        initialValue: "",
        in: {
          $concat: [
            "$$value",
            { $cond: [{ $eq: ["$$value", ""] }, "", ", "] },
            "$$this",
          ],
        },
      },
    };
  },
  castStringToNumberInQuery: function (
    comparator = "$lte",
    convertorType = "Double",
    property
  ) {
    return {
      $expr: {
        [comparator]: [
          { [`$to${convertorType}`]: `$${property}` },
          Number(Object(query)[property]),
        ],
      },
    };
  },
};
