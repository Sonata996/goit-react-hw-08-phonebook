import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  outline: none;
  background: none;
  color: #aebacb;
  border-radius: 3px;
  border-top: none;
  border-left: none;
  border-right: none;
`;
export const ConteinerLabel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
export const FormButton = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  max-width: 80px;
`;
