import styled from 'styled-components';

export const BlockWindow = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  padding-left: 10px;
  background-color: rgb(191 119 19);
  color: white;
  border-radius: 15px;
  display: flex;
  transform: translate(500px);
`;

export const ConteinerAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95px;
`;

export const ButtonAnswer = styled.button`
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  height: 50%;
  &:hover {
    background-color: rgb(159 98 13);
  }
  &:focus > svg {
    transform: scale(130%);
  }

  ${props => {
    if (props.id === '1') {
      console.log(props);
      return `border-top-right-radius: 15px;`;
    } else {
      return `border-bottom-right-radius: 15px;`;
    }
  }}
`;
