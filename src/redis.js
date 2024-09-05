const redis = require("redis");
const { config } = require("./config");

const client = redis.createClient({
	url: `redis://:${config.redis.password}@${config.redis.host}:${config.redis.port}`
});

client.on("error", e => console.error(`Redis Client error: ${e?.message}`));
client.on("ready", () => console.info(`Redis Client connected - ${config.redis.url}`));

module.exports = { redisClient: client };
