const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const { User } = require("./user");

class Token extends Model {}

Token.init(
	{
		token: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notNull: true,
				notEmpty: true
			}
		}
	},
	{
		sequelize: sequelize,
		modelName: "token",
		indexes: [{ fields: ["token", "userId"], unique: true }]
	}
);

User.hasOne(Token, { onDelete: "CASCADE", hooks: true });
Token.belongsTo(User, {
	foreignKey: {
		allowNull: false,
		validate: {
			notNull: true
		}
	}
});

module.exports = { Token };
