const path = require('path');
const {DIR_DOWNLOAD_FILE, AVATAR_ROUTE} = require('./constants');
const { nameMaker } = require('./nameMakerHelper');

const downloadPath = path.resolve(`${DIR_DOWNLOAD_FILE}`)

const pathCombine = (name) => {
    const fileName = nameMaker(name)
    const avatarURL = path.join(`${AVATAR_ROUTE}`, `${fileName}`)
    const newPath = path.join(`${downloadPath}`, `${fileName}`);
     return [newPath, avatarURL]
}

module.exports = {
    downloadPath,
    pathCombine,
}