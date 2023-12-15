const Router = require("express");
const router = Router();
const userController = require("../controller/userController");
const catchAsync = require("../utils/catchAsync");
const sectorModel = require("../models/sectorsModel");
const sectorController = require("../controller/sectorsController");

// router
//   .route("/sectors")
//   .get(sectorController.getALLSectors)
//   .post(sectorController.createSectors);
router.route("/sectors").get(sectorController.getALLSectors);

router.route("/sectors/sub").post(sectorController.createSubSector);
router.post("/user", userController.saveUserData);
router
  .route("/user/:id")
  .get(userController.getUserData)
  .patch(userController.updateUserData);

// router.patch(
//   "/sector",
//   catchAsync(async (req, res, next) => {
//     const sector = await sectorModel.updateOne(
//       {
//         _id: "6579b03c79245fb478d72f20",
//       },
//       {
//         $push: {
//           children: req.body.items,
//         },
//       }
//     );
//     res.json(sector);
//   })
// );
module.exports = router;
