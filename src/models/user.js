const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const { Role } = require("./role");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
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
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				notEmpty: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				notEmpty: true
			}
		},
		isBlocked: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
			validate: {
				notNull: true
			}
		}
	},
	{
		sequelize: sequelize,
		paranoid: true,
		modelName: "user",
		indexes: [{ fields: ["login"], unique: true }]
	}
);

Role.hasMany(User);
User.belongsTo(Role, {
	foreignKey: {
		allowNull: false,
		validate: {
			notNull: true
		}
	}
});

module.exports = { User };
