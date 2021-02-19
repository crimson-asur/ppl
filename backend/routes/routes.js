const router = require("express").Router();
const userAPI = require("../API/userAPI");
// const checkUserExists = require("../API/userAPI");
// home
// @desc pst request login
// @route GET /home/login
router.post("/login", (req, res) => {
  console.log(req.body);
  userAPI.checkUserExists(req, res);
});

router.post("/signup", async (req, res) => {
  console.log(req.body);

  userAPI.createNewUser(req, res);
});

module.exports = router;
