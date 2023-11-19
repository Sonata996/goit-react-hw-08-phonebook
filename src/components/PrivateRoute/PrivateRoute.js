import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { isLoggedIn, isRefreshing} from "redux/authorization/selectors";



export const PrivateRoute = ({component:Component})=>{
    const getIsLoggedIn = useSelector(isLoggedIn)
    const getIsRefreshing= useSelector(isRefreshing)

    const shouldRedirect = !getIsLoggedIn && !getIsRefreshing;
    return shouldRedirect ? <Navigate to='/login'/>: Component
} 