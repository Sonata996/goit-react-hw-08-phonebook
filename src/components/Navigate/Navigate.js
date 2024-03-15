import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/authorization/selectors.js';
import { ElemListNav, ListNav, Nav } from './Navigate.styled.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';

export const Navigate = () => {
  const getIsLoggedIn = useSelector(isLoggedIn);
  return (
    <Nav>
      <ListNav>
        <li>
          <ElemListNav to="/">Home</ElemListNav>
        </li>
        {getIsLoggedIn ? null : (
          <li>
            <ElemListNav to="/register">Register</ElemListNav>
          </li>
        )}
        {getIsLoggedIn ? null : (
          <li>
            <ElemListNav to="/login">Login</ElemListNav>
          </li>
        )}
        {getIsLoggedIn ? (
          <li>
            <ElemListNav to="/contacts">Contacts</ElemListNav>
          </li>
        ) : null}
      </ListNav>

      <UserMenu />
    </Nav>
  );
};
//
