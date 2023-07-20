import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../../utils/config";

export const getProfile = createAsyncThunk(
  "profile/getuser",
  async (id, thunkAPI) => {
    try {
      const Response = await config.get(`profile`);
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

export const profileEdit = createAsyncThunk(
  "profile/edituser",
  async (body, thunkAPI) => {
    try {
      const { id, values } = body;
      console.log(id, values);

      const Response = await config.patch(`profile/${id}`, values);
      console.log(Response.data);

      // return Response.data;
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

export const pictureEdit = createAsyncThunk(
  "profile/pictedit",
  async (body, thunkAPI) => {
    try {
      const { id, value } = body;

      const Response = await config.patch(`profile/${id}`, value);
      console.log(Response);

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

export const pictureRemove = createAsyncThunk(
  "profile/pictrem",
  async (body, thunkAPI) => {
    try {
      const { id, value } = body;

      const Response = await config.patch(`profile/${id}`, value);
      console.log(Response);

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

export const UserDashboard = createAsyncThunk(
  "dashboard/getuser",
  async (id, thunkAPI) => {
    try {
      const Response = await config.get(`customer`);

      return Response.data.total;
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

export const AdminDashboard = createAsyncThunk(
  "dashboard/admin",
  async (id, thunkAPI) => {
    try {
      const Response = await config.get(`admin/person`);
      return Response.data.total;
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
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  customer: null,
  admin: null,
};

const StudentSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = action?.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(profileEdit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileEdit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action?.payload;
      })
      .addCase(profileEdit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(pictureRemove.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pictureRemove.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action?.payload;
      })
      .addCase(pictureRemove.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(AdminDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action?.payload;
      })
      .addCase(UserDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.customer = action?.payload;
      });
  },
});

export const { reset } = StudentSlice.actions;
export default StudentSlice.reducer;
