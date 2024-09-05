const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Role extends Model {}

Role.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				notEmpty: true
			}
		}
	},
	{
		sequelize: sequelize,
		timestamps: false,
		modelName: "role"
	}
);

module.exports = { Role };
