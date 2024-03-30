import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/authorization/selectors.js';
import { ElemListNav, ContainerNav, Nav } from './Navigate.styled.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';

export const Navigate = () => {
  const getIsLoggedIn = useSelector(isLoggedIn);
  return (
    <Nav>
      <ContainerNav>
        <ElemListNav to="/">Home</ElemListNav>
        {getIsLoggedIn ? null : (
          <ElemListNav to="/register">Register</ElemListNav>
        )}
        {getIsLoggedIn ? null : <ElemListNav to="/login">Login</ElemListNav>}
        {getIsLoggedIn ? (
          <ElemListNav to="/contacts">Contacts</ElemListNav>
        ) : null}
      </ContainerNav>

      <UserMenu />
    </Nav>
  );
};
//
