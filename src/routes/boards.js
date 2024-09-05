const { Router } = require("express");
const boardsController = require("../controllers/boards-controller");

const router = Router();

router.get("/", boardsController.findBoards.bind(boardsController));
router.get("/import-miro", boardsController.importMiroBoards.bind(boardsController));

module.exports = router;
