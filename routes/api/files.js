const express = require("express");
const {
  } = require("../../middlewares/validation");

const {
    uploadController,
} = require("../../controllers/filesController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");
const multer = require('multer');
const path = require('path');

const DIR_FILE = path.resolve('./public/avatar')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, DIR_FILE)
    },
    filename: (req, file, callback) => {
        const [filename, extension] = file.originalname.split('.')
        callback(null, `${filename}.${extension}`)
    }
});

const uploadMiddleware = multer({storage})

const router = express.Router();

router.post("/", uploadMiddleware.single('avatar'), asyncWrapper(uploadController));

router.use("/", express.static(DIR_FILE));


module.exports = router;