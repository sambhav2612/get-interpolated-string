module.exports = function getInterpolatedString(template, variables) {
  return template
    .replace(/[\{\]]+/g, "${")
    .replace(/[\}\]]+/g, "}")
    .replace(/\$\{(\w+)\}/gi, (match, inner) => variables[inner] || "");
};
