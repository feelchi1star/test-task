const catchAsync = require("../utils/catchAsync");
const sectorModel = require("../models/sectorsModel");
const sectorModelSUB = require("../models/subSectorsModel");

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

module.exports.createSectors = catchAsync(async (req, res, next) => {
  const sectors = await sectorModel.insertMany([
    { value: "1", label: "Manufacturing" },
    { value: "2", label: "Service" },
    { value: "437", label: "Other" },
  ]);
  return res.json(sectors);
});
module.exports.createSubSector = catchAsync(async (req, res, next) => {
  const sectors = await sectorModelSUB.insertMany(req.body.items);
  const sector = await sectorModelSUB.updateOne(
    {
      _id: req.body.idx,
    },
    {
      $push: {
        children: sectors.map((i) => i._id),
      },
    }
  );
  return res.json(sector);
});
