const { pictureConverter } = require("../helpers/pictureHelper");
const { pathCombine } = require("../helpers/pathHelper");

const imageHandler = (req, res, next) => {
    const {path: oldPath,  originalname} = req.file;
    const [newPath, avatarURL] = pathCombine(originalname)
    pictureConverter(oldPath, newPath);
    req.file.path = avatarURL;
    next()
}
module.exports ={
    imageHandler
}