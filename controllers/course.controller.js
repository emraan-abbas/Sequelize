const db = require('../config/db.config');
const Course = db.course;
const student = db.student;

// Create a Course
exports.create = async (req, res) => {
	try {
		const obj = req.body;
		const course = await Course.create(obj);
		res.send(course);
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Some error while creating a Course !',
		});
	}
};

// Get All Courses
exports.findAll = async (req, res) => {
	try {
		await Course.findAll().then((course) => {
			res.status(200).json({
				status: true,
				data: course,
			});
		});
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting all Courses !',
		});
	}
};

// Get a Course by ID
exports.findById = async (req, res) => {
	try {
		await Course.findAll({
			where: { id: req.params.id },
			include: [{ model: student }],
		}).then((course) => res.json(course));
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while getting a Course by ID !',
		});
	}
};

// Update a Course by ID
exports.update = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while updating a Course by ID !',
		});
	}
};

// Delete a Course by ID
exports.delete = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).send({
			message: error.message || 'Error while deleting a Course by ID !',
		});
	}
};
