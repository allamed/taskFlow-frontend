import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux/es/exports';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: true,
  members: [],
  tasks: [],
  project: {},
};
export const getProjectMembers = createAsyncThunk(
  'allProjects/getProjects/getProjectMembers',
  async (projectId, thunkAPI) => {
    let url = `/projets/${projectId}/members`;

    try {
      const resp = await customFetch.get(url);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
export const getProjectTasks = createAsyncThunk(
  'allProjects/getProjects/getProjectTasks',
  async (projectId, thunkAPI) => {
    let url = `/projets/${projectId}/tasks`;

    try {
      const resp = await customFetch.get(url);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
/* const { allProjects } = useSelector((store) => store.allProjects);
export const getCurrentProject = (projectId) => {
  return allProjects.find((p) => p.id == projectId);
}; */
const currentProjectSlice = createSlice({
  name: 'currentProject',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      //state.page = 1;
      state[name] = value;
    },
    setCurrentProject: (state, payload) => {
      return { ...state, project: payload };
    },
    getCurrentProject: (state) => {
      return { ...state };
    },
    /* clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    }, 
    changePage: (state, { payload }) => {
      state.page = payload;
    },*/
    clearCurrentProjectState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectMembers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.members = payload.membres;

        console.log(payload.membres);
      })
      .addCase(getProjectMembers.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getProjectTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tasks = payload.taches;

        console.log(payload.taches);
      })
      .addCase(getProjectTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
    /* .addCase(getCurrentProject, (state, payload) => {
        state.isLoading = false;
        state.project = payload;
      }) */
  },
});
export default currentProjectSlice.reducer;
export const { handleChange, setCurrentProject, clearCurrentProjectState } =
  currentProjectSlice.actions;
