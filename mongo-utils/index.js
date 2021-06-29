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
    comparator,
    comparisonValue,
    convertorType,
    property
  ) {
    return {
      $expr: {
        [comparator]: [
          { [`$to${convertorType}`]: `$${property}` },
          Number(comparisonValue),
        ],
      },
    };
  },
};
