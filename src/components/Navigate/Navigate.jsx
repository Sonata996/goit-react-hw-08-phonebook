import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/authorization/selectors.js';
import {
  ElemListNav,
  ContainerNav,
  Nav,
  NoLogiNContainer,
  HomeConteiner,
} from './Navigate.styled.js';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';

export const Navigate = () => {
  const getIsLoggedIn = useSelector(isLoggedIn);
  // console.log(getIsLoggedIn);
  return (
    <Nav>
      <ContainerNav>
        <HomeConteiner>
          <ElemListNav to="/">Home</ElemListNav>
          {getIsLoggedIn ? (
            <ElemListNav to="/contacts">Contacts</ElemListNav>
          ) : null}
        </HomeConteiner>

        {getIsLoggedIn ? null : (
          <NoLogiNContainer>
            <ElemListNav to="/register">Register</ElemListNav>
            <ElemListNav to="/login">Login</ElemListNav>
          </NoLogiNContainer>
        )}
        <UserMenu />
      </ContainerNav>
    </Nav>
  );
};
//
