import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  email: null,
  password: null,
}





export const loginSlice = createSlice({
  name: 'login',
  initialState:initialLoginState,
  reducers: {
    loginSuccess: (state, action) => {
      state = action.payload;
    },
    logout: (state) => {
      state.login = null;
    }
  }
})


export const { loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;

