import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const Deposit = createAsyncThunk(
  "deposit/post",
  async (user, thunkAPI) => {
    try {
      const Response = await config.post("deposit", user);
      const userInfo = Response.message;
      // console.log(userInfo);

      return userInfo;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const GetDeposit = createAsyncThunk(
  "deposit/get",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("deposit/view");
      // console.log(Response.data);

      return Response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const PostWithdraw = createAsyncThunk(
  "withdraw/post",
  async (user, thunkAPI) => {
    try {
      const Response = await config.post("withdraw", user);
      const userInfo = Response.data;
      // console.log(userInfo);

      return userInfo;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const Withdraw = createAsyncThunk(
  "withdraw/get",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("withdraw");
      // console.log(Response.data);

      return Response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const usersProfit = createAsyncThunk(
  "withdraw/profit",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get(`withdraw/user-pofit`);
      console.log(Response.data);

      return Response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const GetWithData = createAsyncThunk(
  "withdraw/view",
  async (user, thunkAPI) => {
    try {
      const Response = await config.get("withdraw/view");
      // console.log(Response.data);

      return Response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// type DepositState = {
//   isError: boolean;
//   body: DepData[] | null;
//   withdraw: withdrawData | null;
//   getwith: GetWithDData[] | null;
//   isSuccess: boolean;
//   isLoading: boolean;
//   message: string;
// };

const initialState = {
  // user: [],
  isError: false,
  isSuccess: false,
  body: [],
  withdraw: null,
  getwith: null,
  isLoading: false,
  message: "",
};

const DepositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    reset: (state) => {
      state.body = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Deposit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Deposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action?.payload;
      })
      .addCase(Deposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.body = null;
      })
      .addCase(GetDeposit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetDeposit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.body = action?.payload;
      })
      .addCase(GetDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.body = null;
      })
      .addCase(PostWithdraw.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PostWithdraw.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.body = action?.payload;
      })
      .addCase(PostWithdraw.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.body = null;
      })
      .addCase(Withdraw.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Withdraw.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.withdraw = action?.payload;
      })
      .addCase(usersProfit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.withdraw = action?.payload;
      })
      .addCase(Withdraw.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.body = null;
      })

      .addCase(GetWithData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetWithData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.getwith = action?.payload;
      })
      .addCase(GetWithData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.body = null;
      });
  },
});

export const { reset } = DepositSlice.actions;
export default DepositSlice.reducer;
