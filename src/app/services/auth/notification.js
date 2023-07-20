import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const notification = createAsyncThunk(
  "inst/notification",
  async (body, thunkAPI) => {
    try {
      let { id, pageNumber } = body;
      const Response = await config.get(
        `notification/${id}?page=${pageNumber}`
      );
      // console.log(pageNumber, id);
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

export const ReferralCall = createAsyncThunk(
  "inst/ref",
  async (body, thunkAPI) => {
    try {
      const Response = await config.get(`referral`);
      // console.log(pageNumber, id);
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
  user: [],
  refrrral: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const StudentSlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(notification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(notification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = action?.payload;
      })
      .addCase(notification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(ReferralCall.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ReferralCall.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.refrrral = action?.payload;
      })
      .addCase(ReferralCall.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = StudentSlice.actions;
export default StudentSlice.reducer;
