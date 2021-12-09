const express = require('express');
const router = express();

const teacherRoutes = require('./teacher.routes');
const studentRoutes = require('./student.routes');
const coursesRoutes = require('./course.routes');

router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);
router.use('/course', coursesRoutes);

module.exports = router;
