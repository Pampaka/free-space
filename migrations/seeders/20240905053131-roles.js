"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("roles", [
			{
				id: 1,
				name: "Администратор"
			},
			{
				id: 2,
				name: "Пользователь"
			}
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("roles", {
			id: [1, 2]
		});
	}
};
