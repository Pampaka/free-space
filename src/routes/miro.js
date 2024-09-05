const { Router } = require("express");
const miroController = require("../controllers/miro-controller");

const router = Router();

router.get("/auth", miroController.auth.bind(miroController));

module.exports = router;
