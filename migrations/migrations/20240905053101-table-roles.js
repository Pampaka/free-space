"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"roles",
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					allowNull: false,
					unique: true,
					comment: "Идентификатор"
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false,
					comment: "Наименование"
				}
			},
			{
				comment: "Роли"
			}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("roles");
	}
};
