import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./services/auth/authSplice";
import DepositReducer from "./services/auth/depositSlice";
import NotifyReducer from "./services/auth/notification";
import ProfileReducer from "./services/auth/profileSlice";
import AdminReducer from "./services/auth/admin";
import CryptoReducer from "./services/auth/crypto";

export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    depositReducer: DepositReducer,
    notify: NotifyReducer,
    profile: ProfileReducer,
    admin: AdminReducer,
    crypto: CryptoReducer,
  },
});
