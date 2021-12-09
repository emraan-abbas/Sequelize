module.exports = (sequelize, Sequelize) => {
	const Teacher = sequelize.define(
		'teacher',
		{
			teacherName: {
				type: Sequelize.STRING(100),
			},
		},
		{
			timestamps: false,
		}
	);

	return Teacher;
};
