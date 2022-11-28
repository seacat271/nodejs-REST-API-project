const Jimp = require('jimp');

const pictureHandler = (oldPath, newPath) => {
    Jimp.read(oldPath)
    .then(avatar => {
        return avatar
          .resize(250, 250)
          .write(newPath);
    })
    .catch(err => {
     console.log(err)
    });
}

module.exports = {
    pictureHandler,
}