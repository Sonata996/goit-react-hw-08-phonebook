import { useDispatch, useSelector } from 'react-redux';
import { serviceLogUot } from 'redux/authorization/operation.js';
import { ConteinetMenu, LogoutButton, SpanEmail } from './UserMenu.style.js';
import { isLoggedIn, users } from 'redux/authorization/selectors.js';
import { FaUser } from 'react-icons/fa';

export const UserMenu = () => {
  const getEmail = useSelector(users);
  const getIsLoggedIn = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  return getIsLoggedIn ? (
    <ConteinetMenu>
      <p>
        Welome
        <SpanEmail> {getEmail.email}</SpanEmail>
      </p>
      <FaUser size="40px" />
      <LogoutButton
        type="button"
        onClick={() => dispatch(serviceLogUot(getEmail))}
      >
        Logout
      </LogoutButton>
    </ConteinetMenu>
  ) : null;
};
