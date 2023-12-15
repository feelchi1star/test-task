const Router = require("express");
const router = Router();
const userController = require("../controller/userController");
const sectorController = require("../controller/sectorsController");

router.route("/sectors").get(sectorController.getALLSectors);
router.post("/user", userController.saveUserData);
router
  .route("/user/:id")
  .get(userController.getUserData)
  .patch(userController.updateUserData);

module.exports = router;
