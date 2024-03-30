import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
`;

export const ContainerNav = styled.div`
  display: flex;
  margin-right: auto;
  gap: 20px;
  list-style: none;
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
