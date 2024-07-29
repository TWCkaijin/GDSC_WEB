require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const Database = require("./init_db");//

// Route imports
const authRoute = require("./routes/auth");
//const Member = require("./routes/member");




mongoose.connect(process.env.MONGO_URI);

//stu_id, name, dc_id, paid, course_attendence, project_group, project_attendance
app.use(
	cookieSession({
		name: "session",
		keys: ["gdscnsysu"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use('/auth', authRoute);


mongoose.connection.once('open', async () => {
	console.log('Connected to MongoDB');
	await Database();
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});


mongoose.connection.on('error', (err) => {
	console.error('MongoDB connection error:', err);
  });