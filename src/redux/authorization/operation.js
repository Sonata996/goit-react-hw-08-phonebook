import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const setAuthHeaders = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const changeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const serviceRegister = createAsyncThunk(
  'user/signup',
  async (values, thunkAPI) => {
    try {
      const postUser = await axios.post('/users/signup', values);
      setAuthHeaders(postUser.data.token);
      return postUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const serviceLogIn = createAsyncThunk(
  'user/login',
  async (values, thunkAPI) => {
    try {
      const logInUser = await axios.post('/users/login', values);
      setAuthHeaders(logInUser.data.token);
      return logInUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const serviceLogUot = createAsyncThunk(
  'user/logout',
  async (user, thunkAPI) => {
    try {
      await axios.post('/users/logout', user);
      changeAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refressh',
  async (_, thunkAPI) => {
    const stateTokin = thunkAPI.getState();
    if (stateTokin.authorization.token === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeaders(stateTokin.authorization.token);
      const getInfo = await axios.get('/users/current');
      return getInfo.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
