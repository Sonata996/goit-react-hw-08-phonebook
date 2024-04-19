import { createSlice } from '@reduxjs/toolkit';
import {
  refreshUser,
  serviceLogIn,
  serviceLogUot,
  serviceRegister,
} from './operation';

const AuthorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    errorMessage: null,
  },
  reducers: {
    nullificationError: (state, action) => {
      state.errorMessage = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(serviceRegister.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(serviceLogIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.errorMessage = null;
      })
      .addCase(serviceLogIn.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(serviceLogUot.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const { nullificationError } = AuthorizationSlice.actions;
export const AuthorizationReducer = AuthorizationSlice.reducer;
