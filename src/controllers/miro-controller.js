const miroService = require("../services/miro-service");

class MiroController {
	async auth(req, res, next) {
		try {
			await miroService.auth(req.user, req.query.code);
			res.redirect("/api/boards/import-miro");
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new MiroController();
