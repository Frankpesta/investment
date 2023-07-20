import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const Users = createAsyncThunk("admin/users", async (user, thunkAPI) => {
  try {
    const Response = await config.get("admin/users");
    // console.log(Response.data);

    return Response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(error);

    return thunkAPI.rejectWithValue(message);
  }
});

export const Deposit = createAsyncThunk(
  "admin/deposit",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("admin/deposit");
      // console.log(Response.data);

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

export const Request = createAsyncThunk(
  "admin/request",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("admin/request");
      // console.log(Response.data);

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

export const Withdraw = createAsyncThunk(
  "admin/withdrawals",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("admin/withdrawals");
      // console.log(Response.data);

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

export const ApproveReq = createAsyncThunk(
  "admin/approve",
  async (user, thunkAPI) => {
    try {
      // console.log(user);

      const Response = await config.post(`admin/request`, user);
      // console.log(Response);

      return Response.message;
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

const initialState = {
  user: null,
  deposit: null,
  request: null,
  withdraw: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedOut: false,
  message: "",
  approved: null,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = [];
      state.deposit = [];
      state.withdraw = [];
      state.request = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isLoggedOut = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Users.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Users.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(Users.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(Deposit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Deposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deposit = action?.payload;
      })
      .addCase(Deposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Withdraw.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Withdraw.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.withdraw = action?.payload;
      })
      .addCase(Withdraw.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(ApproveReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ApproveReq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(ApproveReq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Request.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Request.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action?.payload;
      })
      .addCase(Request.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = AdminSlice.actions;
export default AdminSlice.reducer;
