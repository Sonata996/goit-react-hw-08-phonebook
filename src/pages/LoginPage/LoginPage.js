import { useDispatch } from "react-redux"
import { serviceLogIn } from "redux/authorization/operation"
import { ConteinerForm, ConteinetInput, FormButton, FormInput, FormLogin } from "./Login.styled"






export default function LoginPage(){
const dispatch = useDispatch()


const handlerSubmit =(evt) =>{
    evt.preventDefault()
    const form = evt.currentTarget
    console.dir(form);
    dispatch(serviceLogIn({
        email:form.elements.email.value,
        password:form.elements.password.value,
    }))
}

    return(
        <ConteinerForm>
            <FormLogin onSubmit={handlerSubmit}>
                <ConteinetInput>
                    <label htmlFor="email">Email: </label>
                    <FormInput id="email" type="email" name="email" />
                </ConteinetInput>
                <ConteinetInput>
                    <label htmlFor="password">Password: </label>
                    <FormInput id="password" type="text" name="password" />
                </ConteinetInput>

                <FormButton type="submit" onChange={()=>{

                }}>
                    Submit</FormButton>
            </FormLogin>
        </ConteinerForm>
    )
}