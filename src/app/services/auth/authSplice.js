import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const login = createAsyncThunk(
  "auth/sign-in",
  async (user, thunkAPI) => {
    try {
      const Response = await config.post("auth/sign-in", user);
      const userInfo = Response.data;
      console.log(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return Response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const Registeration = createAsyncThunk(
  "auth/sign-up",
  async (user, thunkAPI) => {
    try {
      const Response = await config.post("auth/sign-up", user);
      const userInfo = Response.data.auth;
      console.log(userInfo);

      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // return Response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const VerificationEmail = createAsyncThunk(
  "auth/verify-email",
  async (user, thunkAPI) => {
    try {
      const Response = await config.patch("auth/verify-email", user);
      // console.log(Response.data);
      return Response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("userInfo");
});

const usdd = localStorage.getItem("userInfo");

const user = usdd ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedOut: false,
  message: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isLoggedOut = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // console.log(action?.payload);
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedOut = true;
        state.user = null;
      })
      .addCase(VerificationEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(VerificationEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.user?.push(action?.payload!);
      })
      .addCase(VerificationEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(Registeration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user?.push(action?.payload);
      });
  },
});

export const { reset } = AuthSlice.actions;
export default AuthSlice.reducer;
