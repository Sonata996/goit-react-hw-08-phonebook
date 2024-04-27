import styled from 'styled-components';

export const ConteineInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const ConteinerContacts = styled.div`
  padding: 15px;
`;
export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
  /* border: 1px solid black; */
`;
export const ElemList = styled.li`
  position: relative;
  width: 350px;
  /* height: 60px; */
  margin-left: 15px;
  display: flex;
  padding: 5px;
  gap: 20px;
`;
export const BorderIcon = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 50%;
`;

export const DeletButton = styled.button`
  max-height: 20px;
  position: absolute;
  top: 0;
  right: 5px;
`;

export const NoContacts = styled.h3`
  width: 250px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;
