const { Router } = require("express");
const authController = require("../controllers/auth-controller");

const router = Router();

router.post("/login", authController.login.bind(authController));
router.post("/refresh", authController.refresh.bind(authController));

module.exports = router;
