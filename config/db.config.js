const env = require('./env');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect,
	operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.student = require('../models/student.model')(sequelize, Sequelize);
db.teacher = require('../models/teacher.model')(sequelize, Sequelize);
db.course = require('../models/course.model')(sequelize, Sequelize);
db.course_student = require('../models/CourseStudent.model')(sequelize, Sequelize);
db.course_teacher = require('../models/CourseTeacher.model')(sequelize, Sequelize);

////////////-- DB RELATIONS HERE --////////////

// Student - Course
db.course.belongsToMany(db.student, { through: db.course_student });
db.student.belongsToMany(db.course, { through: db.course_student });

// Teacher - Course;
db.course.belongsToMany(db.teacher, { through: db.course_teacher });
db.teacher.belongsToMany(db.course, { through: db.course_teacher });

// // Student - Teacher

////////////-- DB RELATIONS ENDS HERE --////////////

module.exports = db;
