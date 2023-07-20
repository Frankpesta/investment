import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const GetCrypto = createAsyncThunk("crypto", async (user, thunkAPI) => {
  try {
    const Response = await config.get("coin");
    // console.log(Response.data[0]);

    return Response.data[0];
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(error);

    return thunkAPI.rejectWithValue(message);
  }
});

export const UpdateCoin = createAsyncThunk(
  "crypto/update",
  async (user, thunkAPI) => {
    try {
      const Response = await config.post(`coin/${user.id}`, user.values);
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

const initialState = {
  blog: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateCoin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action?.payload;
      })
      .addCase(UpdateCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetCrypto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCrypto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action?.payload;
      })
      .addCase(GetCrypto.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
