const Jimp = require('jimp');
const fs = require('fs/promises');

const deleteOldOldAvatar = async (userById) => {
    if(!userById.avatarURL) return
    if(userById.avatarURL.slice(0, 18) === "//www.gravatar.com") return
    const newPath = "public" + userById.avatarURL.slice(24)
    await fs.unlink(`${newPath}`, (err) => {
        if (err) throw err;
      });
};

const pictureConverter = (oldPath, newPath) => {
    Jimp.read(oldPath)
    .then(avatar => {
        return avatar
          .resize(250, 250)
          .write(newPath);
    })
    .catch(err => {
     console.log(err)
    });

    fs.unlink(`${oldPath}`, (err) => {
        if (err) throw err;
      });

}

module.exports = {
    pictureConverter,
    deleteOldOldAvatar,
}