const { DataTypes } = require('sequelize/dist');

module.exports = (sequelize, Sequelize) => {
	const Course_Student = sequelize.define(
		'course_student',
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

	return Course_Student;
};
