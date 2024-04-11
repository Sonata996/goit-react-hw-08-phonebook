import { useDispatch, useSelector } from "react-redux";
import { serviceGetContactsApi } from "serviceApi/serviceApi";
import { getError } from "redux/tasks/selectors"; 
import Notiflix from 'notiflix';
import { InputName } from "components/InputName/InputName"; 
import { Contacts } from "components/Contacts/Contacts";
import { InputFilter } from "components/InputFilter/InputFilter";
import { ConteinerLoader } from "components/App/App.styled"; 
import { Loader } from "components/Loader/Loader"; 
import { ConteinetContact, Title } from "./Conatct.styled";
// import { useLocation} from "react-router-dom";



export default function ContactPage(){
const error = useSelector(getError)
const disPatch = useDispatch()
// const location= useLocation();


disPatch(serviceGetContactsApi())

return(
    <ConteinetContact>
        <Title>Phonebook</Title>

         <InputName 
         />
        
        <h2>Contacts</h2>
        
         <InputFilter 
            tilteInput="Find contacts by name"
        /> 

        <Contacts />

        <ConteinerLoader>
             <Loader/>
         </ConteinerLoader>

        {error && 
            Notiflix.Notify.failure(error)
        }
    </ConteinetContact>
)
}