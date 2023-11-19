import { useDispatch } from "react-redux"
import { serviceRegister } from "../../redux/authorization/operation"
import { ConteinerForm, ConteinetInput, FormButton, FormInput, FormRegister } from "./Register.styled"



export default function RegisterPage(){
    const dispatch = useDispatch()
    
    const handlerSubmit =(evt) =>{
        evt.preventDefault()
        const form = evt.currentTarget
        dispatch(serviceRegister({
            name:form.elements.name.value,
            email:form.elements.email.value,
            password: form.elements.password.value
        }))
    }

    return(
        <ConteinerForm>
            <FormRegister onSubmit={handlerSubmit} >
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
                

                <FormButton type="submit">
                    Submit</FormButton>
            </FormRegister>
        </ConteinerForm>
    )
}