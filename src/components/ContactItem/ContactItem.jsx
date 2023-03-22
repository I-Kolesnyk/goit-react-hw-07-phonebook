import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, StyledButton } from './ContactItem.styled';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(deleteContact(id));    
  }

  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <StyledButton type="button" onClick={() => removeContact(id)}>
        Delete
      </StyledButton>
    </ListItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
