const { Miro } = require("@mirohq/miro-api");
const miroStorageService = require("./miro-storage-service");

class MiroService {
	miro = new Miro({
		storage: miroStorageService
	});

	async importBoards(user) {
		if (!(await this.miro.isAuthorized(user.id))) {
			return this.miro.getAuthUrl();
		}

		const api = this.miro.as(user.id);
		for await (const board of api.getAllBoards()) {
			console.log(board);
			for await (const item of board.getAllItems()) {
				console.log(item);
			}
		}
	}

	async auth(user, code) {
		await this.miro.exchangeCodeForAccessToken(user.id, code);
	}
}

module.exports = new MiroService();
