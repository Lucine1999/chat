import { createSlice } from "@reduxjs/toolkit";
import { checkIsAuth, signUp, signIn, signOut } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    role: "",
    loading: false,
    authLoading: true,
    userName: "",
    user: {},
  },
  extraReducers: {
    [checkIsAuth.fulfilled]: (state, { payload }) => {
      if (payload.result === "error") {
        const data = JSON.parse(payload.message);
        if (data.error === "Unauthorized") {
          // sign out
          state.loading = false;
          state.isAuth = false;
          state.role = "";
        }
      } else {
        if (payload.data.user) {
          const { firstName, lastName } = payload.data.user;
          const fullName = `${firstName} ${lastName}`;
          state.isAuth = payload.data.isAuth;
          state.userName = fullName;
          state.user = payload.data.user;
        }
        if (payload.data.role) {
          state.role = payload.data.role;
        } else {
          state.role = "";
        }
      }
      state.authLoading = false;
    },
    [checkIsAuth.rejected]: (state) => {
      state.authLoading = false;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      const { firstName, lastName } = payload.data.user;

      const fullName = `${firstName} ${lastName}`;

      state.loading = false;
      state.isAuth = payload.data.isAuth;
      state.role = payload.data.user.role;
      state.userName = fullName;
      state.user = payload.data.user;
    },
    [signUp.rejected]: (state) => {
      state.loading = false;
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      const { firstName, lastName } = payload.data.user;

      const fullName = `${firstName} ${lastName}`;

      state.loading = false;
      state.isAuth = payload.data.isAuth;
      state.role = payload.data.user.role;
      state.userName = fullName;
      state.user = payload.data.user;
    },
    [signIn.rejected]: (state) => {
      state.loading = false;
    },
    [signOut.pending]: (state) => {
      state.loading = true;
    },
    [signOut.fulfilled]: (state) => {
      state.loading = false;
      state.isAuth = false;
      state.role = "";
      state.userName = "";
    },
    [signOut.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice;
