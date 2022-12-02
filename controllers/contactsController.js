const {
  getContacts,
  getContactById,
  addContact,
  changeContactById,
  deleteContactById,
  updateStatusContact,
} = require("../services/contactsServices");

const getContactsController = async (req, res) => {
  let {page = 1, limit = 20, favorite} = req.query;
  limit = parseInt(limit) > 20 ? 20 : limit;
  const {_id: owner} = req.user;
  const contacts = await getContacts(owner, {page, limit, favorite});
  res.json({contacts, page, limit});
};

const getContactByIdController = async (req, res) => {
  const {_id: owner} = req.user;
  const {contactId} = req.params
  const contactByID = await getContactById(contactId, owner);
  res.json(contactByID);
};

const postContactController = async (req, res) => {
  const {_id: owner} = req.user;
  const {phone, email, name, favorite = false } = req.body
  const newContact = await addContact({phone, email, name, favorite, owner});
  res.status(201).json(newContact);
};


const deleteContactController = async (req, res) => {
    const {contactId} = req.params;
    const {_id: owner} = req.user;
    await deleteContactById(contactId, owner);
    res.json({ message: "contact deleted" })
};

const putContactController = async (req, res) => {
    const { phone, email, name} = req.body;
    const {_id: owner} = req.user;
    const { contactId } = req.params;
    const updateContact = await changeContactById(contactId, { phone, email, name}, owner)
    res.json(updateContact)

};

const statusContactController = async (req, res) =>{
    const {_id: owner} = req.user;
    const {favorite} = req.body;
    const {contactId} = req.params;
    const updateContact = await updateStatusContact(contactId, {favorite}, owner)
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
