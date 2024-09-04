"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"boards",
			{
				id: {
					type: Sequelize.UUID,
					primaryKey: true,
					comment: "Идентификатор"
				}
			},
			{
				comment: "Доски"
			}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("boards");
	}
};
