const catchAsync = require("../utils/catchAsync");
const sectorModel = require("../models/sectorsModel");

module.exports.getALLSectors = catchAsync(async (req, res, next) => {
  const sectors = await sectorModel
    .find({})
    .populate({
      path: "children",
      populate: {
        path: "children",
        populate: "children",
      },
    })
    .lean(); // Use lean for better performance

  res.status(200).json(sectors);
});
