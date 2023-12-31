import { useDispatch} from "react-redux"
import {ContactList,ElemList,DeletButton, ConteineInfo } from "./contacts.styled"
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { getContact, getFilter } from "redux/tasks/selectors";
import { serviceDeletContact } from "serviceApi/serviceApi";


export const Contacts = () =>{
const contacts =useSelector(getContact)
const filter = useSelector(getFilter);
const contactsList =contacts.filter(elem => elem && elem.name.toLowerCase().includes(filter))


    const disPatch = useDispatch()
    return(
        <div>
            <ContactList> 
               {contactsList.map(elem => <ElemList key={elem.id}>
                
                <ConteineInfo>
                    <FaUser size='3em'/>
                    <p>
                        {elem.name}: 
                    </p>
                    <p>
                        {elem.number}
                    </p>
                </ConteineInfo>
                <DeletButton
                    id={elem.id}

                onClick={()=>{
                    disPatch(serviceDeletContact(elem.id))
                }}
                >
                    Delete</DeletButton>
               </ElemList>
                )}
            </ContactList>
        </div>
    )
}