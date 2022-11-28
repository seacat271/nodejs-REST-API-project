const { v4: uuidv4 } = require('uuid');

const fileExtension = (name) => {
    const [, extension] = name.split('.')
    return extension
}

const nameMaker = originalname => {
    return `${uuidv4()}.${fileExtension(originalname)}`
}
module.exports ={ 
    fileExtension,
    nameMaker
}