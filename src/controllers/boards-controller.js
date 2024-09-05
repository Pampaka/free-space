const boardsService = require("../services/boards-service");
const miroService = require("../services/miro-service");

class BoardsController {
	async findBoards(req, res, next) {
		try {
			const boards = await boardsService.findBoards();
			res.json(boards);
		} catch (e) {
			next(e);
		}
	}

	async importMiroBoards(req, res, next) {
		try {
			const redirectUrl = await miroService.importBoards();
			if (redirectUrl) {
				res.redirect(redirectUrl);
				return;
			}
			res.json({ success: true });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new BoardsController();
