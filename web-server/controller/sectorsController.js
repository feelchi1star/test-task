const catchAsync = require("../utils/catchAsync");
const sectorModel = require("../models/sectorsModel");

module.exports.getALLSectors = catchAsync(async (req, res, next) => {
  const sectors = await sectorModel.find({}).populate({
    path: "children",
    populate: {
      path: "children",
      model: "SubSector",
      populate: {
        path: "children",
        model: "SubSector",
      },
    },
  }); // Populate the 'children' field in the nested documents
  res.status(200).json(sectors);
});
