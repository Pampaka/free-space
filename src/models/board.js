const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Board extends Model {}

Board.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			validate: { isUUID: true }
		}
	},
	{
		modelName: "board",
		sequelize
	}
);

module.exports = { Board };
