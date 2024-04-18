import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  padding: 0px 20px 0px 20px;
  height: 100%;
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
`;

export const HomeConteiner = styled.div`
  display: flex;
  margin-right: auto;
  gap: 20px;
`;

export const NoLogiNContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ElemListNav = styled(NavLink)`
  color: #aebacb;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.11;
  &:hover {
    color: white;
  }
`;
