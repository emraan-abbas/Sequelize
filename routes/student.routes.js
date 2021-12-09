const express = require('express');
const router = express.Router();

const student = require('../controllers/student.controller');

// Create a Student
router.post('/', student.create);

// Finad all USer
router.get('/', student.findAll);

// Find a Single User
router.get('/:id', student.findById);

// Update a User Data with ID
router.put('/:id', student.update);

// // Delete a Tutorial with id
router.delete('/:id', student.delete);

module.exports = router;
