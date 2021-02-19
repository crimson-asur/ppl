// API to handle uploading and getting new Posts(images);
const multer = require("multer");
const path = require("path");
// set storage engine
const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, callback) => {
    console.log(file.originalname);
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// init upload
const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    checkFileType(file, callback);
  },
});

const checkFileType = (file, callback) => {
  //allowed extensions
  const fileTypes = /jpeg|jpg|gif|png/;
  //check extension
  console.log(path.extname(file.originalname).toLowerCase());
  let extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  //check mime type

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return callback(null, true);
  } else {
    callback("error:images only");
  }
};

module.exports = upload;
