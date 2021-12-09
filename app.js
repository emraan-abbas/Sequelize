const express = require('express');
const app = express();
const routes = require('./routes/index');
const db = require('./config/db.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Here
app.use('/', routes);

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Classroom.' });
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});

// DROP TABLE
// db.sequelize.sync().then(() => {
// 	console.log('Drop and Resync with { force: true }');
// });
