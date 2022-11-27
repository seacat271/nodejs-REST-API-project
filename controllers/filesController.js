const uploadController = (req, res) => {
   res.json({ message: "upload complete" })
}

const downloadController = (req, res) => {
    res.json({ message: "download complete" })
 }

module.exports = {
    uploadController,
    downloadController,
}