const mongoose = require("mongoose");

const SectorModel = mongoose.model("SubSector", {
  label: {
    type: String,
    unique: true,
    lowerCase: true,
    required: [true, "Please provide the label"],
  },
  value: {
    type: Number,
    required: [true, "Please the sector value"],
  }, // Efficiently track and reference specific sectors using their unique "value" even with support for different languages.
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubSector" }], // Using Hierarchy to achieve the grouping
});

module.exports = SectorModel;
