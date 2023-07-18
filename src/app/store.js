import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./services/auth/authSplice";

export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
  },
});
