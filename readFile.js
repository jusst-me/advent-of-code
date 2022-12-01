const fs = require("fs");

module.exports = async (path) => {
  return await fs.readFileSync(`${path}`, "utf8")
};
