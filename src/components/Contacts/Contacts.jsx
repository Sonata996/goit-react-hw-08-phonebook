import { useDispatch } from 'react-redux';
import {
  ContactList,
  ElemList,
  DeletButton,
  ConteineInfo,
  BorderIcon,
} from './contacts.styled';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { getContact, getFilter } from 'redux/tasks/selectors';
import {
  serviceDeletContact,
  serviceGetContactsApi,
} from 'serviceApi/serviceApi';

export const Contacts = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const contactsList = contacts.filter(
    elem => elem && elem.name.toLowerCase().includes(filter)
  );

  const disPatch = useDispatch();
  return (
    <ContactList>
      {contactsList.map(elem => (
        <ElemList key={elem._id}>
          <ConteineInfo>
            <BorderIcon>
              <FaUser size="40px" />
            </BorderIcon>

            <p>{elem.name}:</p>
            <p>{elem.phone}</p>
          </ConteineInfo>
          <DeletButton
            onClick={() => {
              disPatch(serviceDeletContact(elem._id));
              disPatch(serviceGetContactsApi());
            }}
          >
            Delete
          </DeletButton>
        </ElemList>
      ))}
    </ContactList>
  );
};
