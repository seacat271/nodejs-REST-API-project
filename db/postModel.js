const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: String,
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
