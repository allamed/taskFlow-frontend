import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
  dashBoardText: "Dashboard",
  userImage: "",
  userParticipationProjects: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
    setDashboardText: (state, { payload }) => {
      state.dashBoardText = payload;
      console.log("dashboardtext" + state.dashBoardText);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        console.log("pending");
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.nom}`);
        console.log(user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.error);
        toast.error(`erreur : ${payload.error} `);
        console.log(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.nom}`);
        console.log(user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.error(payload.error);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const user = payload;
        console.log(user);
        state.isLoading = false;
        state.user = user;
        //addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error("There was an error..");
      })
      .addCase(getUserImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const base64Image = btoa(
          new Uint8Array(payload).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        console.log(payload);
        const url = "data:image/jpeg;base64," + base64Image;
        console.log(url);
        state.userImage = url;
      })
      .addCase(getUserImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getUserParticipationProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserParticipationProjects.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        console.log(payload);

        state.userParticipationProjects = payload.projets;
      })
      .addCase(getUserParticipationProjects.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    //return registerUserThunk('/auth/register', user, thunkAPI);
    try {
      const resp = await customFetch.post("/utilisateurs", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    //return loginUserThunk('/auth/login', user, thunkAPI);
    try {
      const resp = await customFetch.post("/login", user);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserImage = createAsyncThunk(
  "user/image",
  async (_, thunkAPI) => {
    const userId = getUserFromLocalStorage().id;
    try {
      const resp = await customFetch.get(`/image/info/${userId}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserParticipationProjects = createAsyncThunk(
  "user/participationProjects",
  async (_, thunkAPI) => {
    const userId = getUserFromLocalStorage().id;
    try {
      const resp = await customFetch.get(`/utilisateurs/${userId}/projets`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const { logoutUser } = userSlice.actions;
export const clearStore = createAsyncThunk(
  "user/clearStore",
  async (message, thunkAPI) => {
    try {
      thunkAPI.dispatch(logoutUser(message));
      //thunkAPI.dispatch(clearAllJobsState());
      //thunkAPI.dispatch(clearValues());
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/updateUser", user);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error.response.data, thunkAPI);
    }
  }
);
const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};
function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return window.btoa(bufView);
}

export const { toggleSidebar, setDashboardText } = userSlice.actions;
export default userSlice.reducer;
