const { redisClient } = require("../redis");

class MiroStorageService {
	async get(userId) {
		const value = await redisClient.hGet("miro", userId);
		if (!value) return undefined;
		return JSON.parse(value);
	}

	async set(userId, state) {
		if (!state) return await redisClient.hDel("miro", userId);
		await redisClient.hSet("miro", userId, JSON.stringify(state));
	}
}

module.exports = new MiroStorageService();
