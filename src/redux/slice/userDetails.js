import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const server='http://localhost:8090/api/v1'
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};

//Actions.......
export const loginUser = createAsyncThunk(
  "loginUser",
  async (email, password) => {
    try {
      const response = await axios.post( `${server}/LoginUser`, {
        email: email,
        password: password
      });
  
      // Handle the response
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
      }
    }
  
  }
);
const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
        state.message = action.payload;
      });
  },
});

export default userDetailSlice.reducer;
