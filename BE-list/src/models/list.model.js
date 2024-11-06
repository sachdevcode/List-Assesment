const mongoose = require("mongoose");
const CONSTANTS = require("../utils/constant");

const listSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, CONSTANTS.VALIDATE_NAME],
    },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
