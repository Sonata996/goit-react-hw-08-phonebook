import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeaders = (token) =>{
axios.defaults.headers.common.Authorization = `Bearer ${token}`
}


const changeAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const serviceRegister = createAsyncThunk('user/singup', async (values,thunkAPI) =>{
    try{
        const postUser = await axios.post('/users/signup',values)
        setAuthHeaders(postUser.data.token)
        return postUser.data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const serviceLogIn = createAsyncThunk('user/login',async(values,thunkAPI) =>{
try{
    const logInUser = await axios.post('/users/login',values)
    setAuthHeaders(logInUser.data.token)
    return logInUser.data
}catch(error){
    return thunkAPI.rejectWithValue(error.message)
}
})


export const serviceLogUot = createAsyncThunk('user/logout', async( _,thunkAPI) =>{
try{
    await axios.post("/users/logout")
    changeAuthHeader()
}catch(error){
    return thunkAPI.rejectWithValue(error.message)
}
})



export const refreshUser = createAsyncThunk('user/refressh', async (_,thunkAPI) =>{
const stateTokin = thunkAPI.getState()
if (stateTokin.authorization.token === null) {
        return thunkAPI.rejectWithValue()
}
try{
    setAuthHeaders(stateTokin.authorization.token)
    const getInfo = await axios.get('/users/current')
    return getInfo.data
}catch(error){
    return thunkAPI.rejectWithValue(error.message)
}
})