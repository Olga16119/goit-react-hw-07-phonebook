import axios from 'axios';
axios.defaults.baseURL = 'https://64ea5236bf99bdcc8e677d09.mockapi.io/contacts';

const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const addNewContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

const deleteContacts = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

export { fetchAllContacts, addNewContact, deleteContacts };
