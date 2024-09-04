const { Router } = require("express");
const controller = require("../controllers/boards-controller");

const router = Router();

router.get("/", controller.findBoards.bind(controller));

module.exports = router;
