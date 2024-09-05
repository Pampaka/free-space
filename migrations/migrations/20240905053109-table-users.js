"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.sequelize.transaction(async transaction => {
			await queryInterface.createTable(
				"users",
				{
					id: {
						type: Sequelize.UUID,
						primaryKey: true,
						allowNull: false,
						unique: true,
						comment: "Идентификатор"
					},
					name: {
						type: Sequelize.STRING,
						allowNull: false,
						comment: "Полное имя"
					},
					login: {
						type: Sequelize.STRING,
						allowNull: false,
						comment: "Логин"
					},
					password: {
						type: Sequelize.TEXT,
						allowNull: false,
						comment: "Пароль"
					},
					isBlocked: {
						type: Sequelize.BOOLEAN,
						allowNull: false,
						defaultValue: false,
						comment: "Заблокирован"
					},
					createdAt: {
						type: Sequelize.DATE,
						allowNull: false
					},
					updatedAt: {
						type: Sequelize.DATE,
						allowNull: false
					},
					deletedAt: {
						type: Sequelize.DATE
					},
					roleId: {
						type: Sequelize.INTEGER,
						allowNull: false,
						references: {
							model: "roles",
							key: "id"
						},
						comment: "Роль"
					}
				},
				{
					comment: "Пользователи",
					transaction
				}
			);

			await queryInterface.addIndex("users", ["login"], { unique: true, transaction });
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users");
	}
};
