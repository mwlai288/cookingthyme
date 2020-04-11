// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');

// // Init file upload and storage

// const fileConn = mongoose.createConnection(process.env.MONGO_URI, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false
// });
// // Init gfs

// let gfs;
// fileConn.once('open', () => {
// 	gfs = Grid(fileConn.db, mongoose.mongo);
// 	gfs.collection('uploads');
// });
// // Storage Engine
// const storage = new GridFsStorage({
// 	url: `${process.env.MONGO_URI}`,
// 	file: (req, file) => {
// 		return new Promise((resolve, reject) => {
// 			crypto.randomBytes(16, (err, buf) => {
// 				if (err) {
// 					return reject(err);
// 				}
// 				const filename = buf.toString('hex') + path.extname(file.originalname);
// 				const fileInfo = {
// 					filename: filename,
// 					bucketName: 'uploads'
// 				};
// 				resolve(fileInfo);
// 			});
// 		});
// 	}
// });
// const upload = multer({ storage });

// module.exports = upload;
