import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

export default ContactList;
