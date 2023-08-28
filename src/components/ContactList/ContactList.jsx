import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperation';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = () => {
    const filterNormalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  return (
    <>
      {!isLoading && !error}
      <ul className={css.contactList}>
        {visibleContacts().map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
