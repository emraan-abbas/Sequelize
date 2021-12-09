const { DataTypes } = require('sequelize/dist');

module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define(
		'student',
		{
			studentName: {
				type: Sequelize.STRING,
			},
			class: {
				type: Sequelize.STRING,
			},
		},
		{
			timestamps: false,
		}
	);

	return Student;
};
