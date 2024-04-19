import { useDispatch, useSelector } from 'react-redux';
import { serviceLogIn } from 'redux/authorization/operation';
import {
  ConteinerForm,
  ConteinetInput,
  ErrorMessage,
  FormButton,
  FormInput,
  FormLogin,
} from './Login.styled';
import { errorMessage, token } from 'redux/authorization/selectors';
import { useEffect } from 'react';
import { nullificationError } from 'redux/authorization/slice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const tokenUser = useSelector(token);
  const errorForm = useSelector(errorMessage);

  useEffect(() => {
    dispatch(nullificationError());
  }, []);

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      serviceLogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
        token: tokenUser,
      })
    );
  };

  return (
    <ConteinerForm>
      <FormLogin onSubmit={handlerSubmit}>
        <ConteinetInput>
          <label htmlFor="email">Email: </label>
          <FormInput id="email" type="email" name="email" />
        </ConteinetInput>
        <ConteinetInput>
          <label htmlFor="password">Password: </label>
          <FormInput id="password" type="password" name="password" />
        </ConteinetInput>

        {errorForm && <ErrorMessage>{errorForm}</ErrorMessage>}

        <FormButton type="submit" onChange={() => {}}>
          Submit
        </FormButton>
      </FormLogin>
    </ConteinerForm>
  );
}
