const { Router } = require("express");

const router = Router();

router.use("/boards", require("./boards"));
router.use("/miro", require("./miro"));
router.use("/auth", require("./auth"));

module.exports = router;
