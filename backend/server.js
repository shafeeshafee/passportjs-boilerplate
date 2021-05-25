const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const User = require("./user");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/passportDb", { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
	console.log("Successfully connected to MongoDB.");
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000", // location of react
		credentials: true,
	})
);
app.use(
	session({
		secret: "secretcode",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// routes
app.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send("No User Exists");
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.send("Successfully Authenticated");
				console.log(req.user);
			});
		}
	})(req, res, next);
});
app.post("/register", (req, res) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) res.send("User Already Exists");
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
			});
			await newUser.save();
			res.send("User Created");
		}
	});
});
app.get("/user", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//start server
app.listen(4000, () => {
	console.log("Server has started.");
});
