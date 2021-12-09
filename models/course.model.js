module.exports = (sequelize, Sequelize) => {
	const Course = sequelize.define(
		'course',
		{
			courseName: {
				type: Sequelize.STRING(100),
			},
		},
		{
			timestamps: false,
		}
	);

	return Course;
};
