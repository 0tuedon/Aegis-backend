const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/aegis';

const connectDB = async () => {
	try {
		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected: ${url}`);
	} catch (err) {
		console.error(err);
	}
};

connectDB();

app.listen(8080, () => {
	console.log('Backend App running on port 8080 Aieges');
});