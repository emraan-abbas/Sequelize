const { course_teacher } = require('../config/db.config');
const db = require('../config/db.config');
const Student = db.student;
const Course_Student = db.course_student;
const Course_Teacher = db.course_teacher;
const course = db.course;
const teacher = db.teacher;

// Create a Student
exports.create = async (req, res) => {
	try {
		const obj = req.body;
		const student = await Student.create(obj);
		const CourseStudent = await Course_Student.create({
			studentId: student.id,
			courseId: req.body.courseId,
		});
		res.send(student);
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Some error while creating a Student !',
		});
	}
};

// Get All Students
exports.findAll = async (req, res) => {
	try {
		const student = await Student.findAll({
			attributes: ['studentName', 'class'],
			attributes: { exclude: ['id'] },
			include: [
				{
					model: course,
					//
					through: {
						attributes: [],
					},
					//
					attributes: ['courseName'],
					attributes: { exclude: ['course_teacher', 'id'] },
					include: [
						{
							model: teacher,
							//
							through: {
								attributes: [],
							},
							//
							attributes: ['teacherName'],
						},
					],
				},
			],
		});
		return res.status(200).json({
			status: true,
			data: student, // Added
		});
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting all Students !',
		});
	}
};

// Get a Student by ID
exports.findById = async (req, res) => {
	try {
		await Student.findAll({
			where: { id: req.params.id },
			attributes: { exclude: ['id'] },
			include: [
				{
					model: course,
					attributes: { exclude: ['id'] },
					through: {
						attributes: [],
					},
					include: [
						{
							model: teacher,
							attributes: { exclude: ['id'] },
							through: {
								attributes: [],
							},
						},
					],
				},
			],
		}).then((student) => res.json(student));
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting a Student by ID !',
		});
	}
};

// Update a Student by ID
exports.update = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while updating a Student by ID !',
		});
	}
};

// Delete a Student by ID
exports.delete = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while deleting a Student by ID !',
		});
	}
};
