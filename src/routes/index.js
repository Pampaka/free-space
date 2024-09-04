const { Router } = require("express");

const router = Router();

router.use("/boards", require("./boards"));

module.exports = router;
