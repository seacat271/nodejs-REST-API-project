const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('../public/avatar'))
    },
    filename: (req, file, callback) => {
        const [filename, extension] = file.originalname.split('.')
        callback(null, `${filename}.${extension}`)
    }
});

const uploadMiddleware = multer({storage})

module.exports = {
    uploadMiddleware,
}