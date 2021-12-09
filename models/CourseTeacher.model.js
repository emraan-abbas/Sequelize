const { DataTypes } = require('sequelize/dist');

module.exports = (sequelize, Sequelize) => {
	const Course_Teacher = sequelize.define(
		'course_teacher',
		{
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		},
		{
			timestamps: false,
		}
	);

	return Course_Teacher;
};
