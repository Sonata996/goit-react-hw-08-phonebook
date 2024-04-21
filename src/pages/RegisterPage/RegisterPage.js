import { useDispatch, useSelector } from 'react-redux';
import { serviceRegister } from '../../redux/authorization/operation';
import {
  ConteinerForm,
  ConteinetInput,
  ErrorMessage,
  FormButton,
  FormInput,
  FormRegister,
} from './Register.styled';
import { useEffect } from 'react';
import { errorMessage } from 'redux/authorization/selectors';
import { nullificationError } from 'redux/authorization/slice';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const errorForm = useSelector(errorMessage);

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      serviceRegister({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  useEffect(() => {
    dispatch(nullificationError());
  }, []);

  return (
    <ConteinerForm>
      <FormRegister onSubmit={handlerSubmit}>
        <ConteinetInput>
          <label htmlFor="name">Name: </label>
          <FormInput id="name" type="text" name="name" />
        </ConteinetInput>
        <ConteinetInput>
          <label htmlFor="email">Email: </label>
          <FormInput id="email" type="email" name="email" />
        </ConteinetInput>
        <ConteinetInput>
          <label htmlFor="password">Password: </label>
          <FormInput id="password" type="password" name="password" />
        </ConteinetInput>
        {errorForm && <ErrorMessage>{errorForm}</ErrorMessage>}
        <FormButton type="submit">Submit</FormButton>
      </FormRegister>
    </ConteinerForm>
  );
}
