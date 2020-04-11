const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log(
			`mongodb connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (err) {
		console.log(`error: ${err.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDB;
