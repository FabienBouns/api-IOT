const { ApiError } = require("gatos/errors");

/**
 * @type {import("gatos").Handler}
 */
module.exports = ({ query }) => {
  const { key } = query;

  if (key !== process.env.KEYSTORE_PASSWORD) {
    throw new ApiError("key.invalid", 401, "Invalid key");
  }
};
