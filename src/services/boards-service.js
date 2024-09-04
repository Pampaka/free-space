const { Board } = require("../models");

class BoardsService {
	async findBoards() {
		return Board.findAll();
	}
}

module.exports = new BoardsService();
