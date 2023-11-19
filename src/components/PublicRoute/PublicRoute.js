import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { isLoggedIn} from "redux/authorization/selectors";



export const PublicRoute = ({component:Component})=>{
    const getIsLoggedIn = useSelector(isLoggedIn)
    

    return getIsLoggedIn ? <Navigate to='/contacts'/>: Component
} 