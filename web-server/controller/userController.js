const catchAsync = require("../utils/catchAsync");
const UserModel = require("../models/userModel");
const AppError = require("../utils/appError");
const STATUS_CODE = require("http-status-codes").StatusCodes;
const { validateID } = require("../utils/helpers");
const SubSectorModel = require("../models/subSectorsModel");

module.exports.saveUserData = catchAsync(async (req, res, next) => {
  let { name, sectors, agreeToTerms } = req.body;

  // Validate input data
  if (!name || !sectors || agreeToTerms === undefined) {
    return next(
      new AppError(
        "Invalid input data. please fill up the necessary field",
        STATUS_CODE.BAD_REQUEST
      )
    );
  }

  // Checks if the value of the sector exists
  const availableSector = await SubSectorModel.find({
    value: { $in: sectors },
  });

  const user = new UserModel({ name, sectors: availableSector, agreeToTerms });
  await user.save();
  if (!user) {
    return next(
      new AppError("Unable to save user data", STATUS_CODE.FAILED_DEPENDENCY)
    );
  }
  res.status(200).json({ message: "User data saved successfully", data: user });
});

module.exports.getUserData = catchAsync(async (req, res, next) => {
  if (!validateID(req.params.id)) {
    return next(
      new AppError("Please Provide a valid User ID", STATUS_CODE.BAD_REQUEST)
    );
  }
  const userData = await UserModel.findOne({
    _id: req.params.id,
  }).populate({ path: "sectors", model: "SubSector" });

  if (!userData) {
    return next(new AppError("User Data Not Found", STATUS_CODE.NOT_FOUND));
  }
  res.status(200).json(userData);
});

module.exports.updateUserData = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, sectors } = req.body;
  if (!validateID(id)) {
    return next(
      new AppError("Please Provide a valid User ID", STATUS_CODE.BAD_REQUEST)
    );
  }

  if (!sectors) {
    return next(
      new AppError("Please select a Sector", STATUS_CODE.BAD_REQUEST)
    );
  }

  const userData = await UserModel.findOne({
    _id: id,
  });

  if (!userData) {
    return next(new AppError("User Data Not Found", STATUS_CODE.NOT_FOUND));
  }

  // Checks if the value of the sector exists
  const availableSector = await SubSectorModel.find({
    value: { $in: sectors },
  });

  if (!availableSector.every((e) => validateID(e))) {
    return next(
      new AppError("Please provide a valid sector ID", STATUS_CODE.BAD_REQUEST)
    );
  }

  userData.sectors = availableSector;
  // Update Name if provided for change
  if (name) {
    userData.name = name;
  }
  // Save the updated user
  const updatedUser = await userData.save();
  res
    .status(200)
    .json({ message: "User data updated successfully", data: updatedUser });
});
