const boardsService = require("../services/boards-service");

class BoardsController {
	async findBoards(req, res, next) {
		try {
			const boards = await boardsService.findBoards();
			res.json(boards);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new BoardsController();
