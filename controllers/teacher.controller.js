const db = require('../config/db.config');
const Teacher = db.teacher;
const Course_Teacher = db.course_teacher;
const course = db.course;
const student = db.student;

// Create a Teacher
exports.create = async (req, res) => {
	try {
		const obj = req.body;
		const teacher = await Teacher.create(obj);
		const CourseTeacher = await Course_Teacher.create({
			teacherId: teacher.id,
			courseId: req.body.courseId,
		});
		res.send(teacher);
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Some error while creating a Teacher !',
		});
	}
};

// Get All Teachers
exports.findAll = async (req, res) => {
	try {
		const teacher = await Teacher.findAll({
			include: [{ model: course, include: [{ model: student }] }],
		});
		return res.status(200).json({
			status: true,
			data: teacher,
		});
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting all Teachers !',
		});
	}
};

// Get a Teacher by ID
exports.findById = async (req, res) => {
	try {
		await Teacher.findAll({
			where: { id: req.params.id },
			include: [{ model: student }],
		}).then((teacher) => res.json(teacher));
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting a Teacher by ID !',
		});
	}
};

// Update a Teacher by ID
exports.update = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while updating a Teacher by ID !',
		});
	}
};

// Delete a Teacher by ID
exports.delete = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while deleting a Teacher by ID !',
		});
	}
};
