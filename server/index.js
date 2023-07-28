const express = require('express');
const cors = require('cors');
const app = express();
// var env = require('node-env-file');
require('custom-env').env();
// const { client } = require('./db');
const User = require('./db/models/User');
const { uri } = require('./db');
const mongoose = require("mongoose");
const { connection } = require('mongoose');
const bcrypt = require('bcryptjs');
// const salt = "rGo}K+,k|5Qa!_@^t K[5}>@(S;2btG?[xJ`%$:g3J&O9z[rGo%*|Z>!u<.Ih!Fb"
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

const start = async () => {
	try {
		await mongoose.connect(
			uri
		);
		app.listen(4000, () => console.log("Server started on port 4000"));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};
start().catch(console.dir);

app.get('/register', async (req, res) => {
  	try {
		const newUser = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, salt)
		});
		res.json(newUser)
	} catch (err) {
		res.status(500).send({message: "failed"})
	}
})

app.get('/login', async (req, res) => {
	try {
	  const { email, password } = req.body;
	  const user = await User.findOne({
		  email
	  });
	  const validated = await bcrypt.compare(password, user.password);
	  res.status(200).send(user);
	  
  } catch (err) {
	  res.status(500).send({message: "failed"})
  }
})

// app.listen(4000);