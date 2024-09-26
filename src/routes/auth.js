const { Router } = require("express");
const authController = require("../controllers/auth-controller");

const router = Router();

router.post("/sign-in", authController.signIn.bind(authController));
router.post("/refresh", authController.refresh.bind(authController));

module.exports = router;
