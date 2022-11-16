const {
  getContacts,
  getContactById,
  addContact,
  changeContactById,
  deleteContactById,
  updateStatusContact,
} = require("../services/contactsServices");

const getContactsController = async (req, res) => {
  const contacts = await getContacts();
  res.json(contacts);
};

const getContactByIdController = async (req, res) => {
  const {contactId} = req.params
  const contactByID = await getContactById(contactId);
  res.json(contactByID);
};

const postContactController = async (req, res) => {
    const {phone, email, name, favorite = false } = req.body
  const newContact = await addContact({phone, email, name, favorite});
  res.status(201).json(newContact);
};


const deleteContactController = async (req, res) => {
    const {contactId} = req.params;
    await deleteContactById(contactId);
    res.json({ message: "contact deleted" })
};

const putContactController = async (req, res) => {
    const { phone, email, name} = req.body;
    const { contactId } = req.params;
    const updateContact = await changeContactById(contactId, { phone, email, name})
    res.json(updateContact)

};

const statusContactController = async (req, res) =>{
    const {favorite} = req.body;
    const { contactId} = req.params;
    const updateContact = await updateStatusContact(contactId, {favorite})
    res.json(updateContact)
}

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  statusContactController,
};
