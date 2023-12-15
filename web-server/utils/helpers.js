const mongoose = require("mongoose");
/**
 *
 * @param {import("mongoose").Schema.Types.ObjectId} id
 * @returns
 */
module.exports.validateID = function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};
