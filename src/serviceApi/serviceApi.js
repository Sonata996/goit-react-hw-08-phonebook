import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';




export const serviceGetContactsApi = createAsyncThunk('contact/fetchAll', async (_,thunkAPI)=>{
    try{
        const getApi = await axios.get('/contacts')
        return getApi.data   
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
    
})

export const servicePostContact = createAsyncThunk('contactS/addContact', async (newContact,thunkAPI) =>{
    try{
        const postContact = await axios.post(`/contacts`,newContact)
        return postContact.data   
    }catch(error){
       return thunkAPI.rejectWithValue(error.message)
    }
})



export const serviceDeletContact = createAsyncThunk('contactS/deleteContact', async (id,thunkAPI) =>{
    try{
        const deletContact = await axios.delete(`/contacts/${id}`)
        return deletContact.data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})