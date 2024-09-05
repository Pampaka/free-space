"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.sequelize.transaction(async transaction => {
			await queryInterface.createTable(
				"tokens",
				{
					token: {
						type: Sequelize.TEXT,
						allowNull: false,
						comment: "Токен"
					},
					userId: {
						type: Sequelize.UUID,
						allowNull: false,
						onDelete: "CASCADE",
						references: {
							model: "users",
							key: "id"
						},
						comment: "Пользователь"
					},
					createdAt: {
						type: Sequelize.DATE,
						allowNull: false
					},
					updatedAt: {
						type: Sequelize.DATE,
						allowNull: false
					}
				},
				{
					transaction,
					comment: "Токены"
				}
			);

			await queryInterface.addIndex("tokens", ["token", "userId"], {
				unique: true,
				transaction
			});
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("tokens");
	}
};
