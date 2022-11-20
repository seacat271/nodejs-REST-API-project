const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: 'users',
  // },
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  });

  const Contact = mongoose.model('contacts', contactSchema);

module.exports = {
    Contact
}
