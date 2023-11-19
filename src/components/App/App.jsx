import {  Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "components/Layout/Layout";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/authorization/operation";
import { isRefreshing } from "redux/authorization/selectors";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { Loader } from "components/Loader/Loader";


const HomePage = lazy(()=> import('pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const ContactPage = lazy(() => import('pages/ContactPage/ContactsPage'))

export const App = () =>{
  const dispatch = useDispatch()
  const getIsRefreshing = useSelector(isRefreshing)
  
  useEffect(() =>{
    dispatch(refreshUser())
  },[dispatch])


      return getIsRefreshing ? (<Loader/>):(
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="register" 
            element={<PublicRoute component={<RegisterPage />}
            />}/>

            <Route path="login" 
            element={<PublicRoute component={<LoginPage />}
            />}/>

            <Route path="contacts" 
            element={<PrivateRoute redirectTo="login" component={<ContactPage />}
            />}/>

            <Route path="*" element={<Navigate to="/"/>}/>
          </Route>
        </Routes>
          );

}
