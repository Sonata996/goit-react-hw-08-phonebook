import { useDispatch, useSelector } from 'react-redux';
import { serviceLogIn } from 'redux/authorization/operation';
import {
  ConteinerForm,
  ConteinetInput,
  FormButton,
  FormInput,
  FormLogin,
} from './Login.styled';
import { token } from 'redux/authorization/selectors';

export default function LoginPage() {
  const dispatch = useDispatch();
  const tokenUser = useSelector(token);

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.dir(form);
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

        <FormButton type="submit" onChange={() => {}}>
          Submit
        </FormButton>
      </FormLogin>
    </ConteinerForm>
  );
}
