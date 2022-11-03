import { createSlice } from "@reduxjs/toolkit";

const initalSignupState = {
  email: null,
  password: null,
  firstName: null,
  lastName: null,
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState: initalSignupState,
  reducers: {
    signupSuccess: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
})

export const { signupSuccess } = signupSlice.actions;
export default signupSlice.reducer;



// export const login = (user) => (dispatch) => {
//   return AuthService.logIn(user).then(
//     (response) => {
//       if (response.status === "success") {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: response.user },
//         });
// Promise.resolve();
//         return response;
//       }
//     },
//     (error) => {
//       const message = error.toString();
// Promise.reject();
//       return message;
//     }
//   );
// };
// export const logout = () => (dispatch) => {
//   return AuthService.logOut().then((response) => {
//     if (response.status === "success") {
//       dispatch({
//         type: LOGOUT,
//       });
//       Promise.resolve();
//       return response;
//     }
//   });
// };


// export const signup = (user) => (dispatch) => {
//   return AuthService.signup(user).then(
//     (response) => {
//       if (response.status === "success") {
//         dispatch({
//           type: SIGNUP_SUCCESS,
//           payload: { user: response.user },
//         });
// Promise.resolve();
//         return response;
//       }
//     },
//     (error) => {
//       const message = error.toString();
// Promise.reject();
//       return message;
//     }
//   );
// };


