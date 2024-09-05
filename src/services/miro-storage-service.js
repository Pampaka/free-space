const { redisClient } = require("../redis");

class MiroStorageService {
	async get(userId) {
		const value = await redisClient.get(userId.toString());
		if (!value) return undefined;
		return JSON.parse(value);
	}

	async set(userId) {
		if (!state) return await redisClient.del(userId);
		await redisClient.set(userId, JSON.stringify(state));
	}
}

module.exports = new MiroStorageService();
