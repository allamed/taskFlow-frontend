import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
const initialState = {
  isLoading: true,
};
export const createTask = createAsyncThunk(
  'tasks/addNewTask',
  async (task, thunkAPI) => {
    const tache = {
      titre: task.title,
      deadLine: task.deadline.toISOString(),
      responsableId: task.responsableId,
      projetId: task.projectId,
    };
    console.log('tacheEnv');
    console.log(tache.titre);
    let url = `/taches/create`;

    try {
      const resp = await customFetch.post(url, tache);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);
const createNewTasksSlice = createSlice({
  name: 'newTask',
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
    /* clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    }, 
    changePage: (state, { payload }) => {
      state.page = payload;
    },*/
    clearAllTasksState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        toast.success('tache créée avec succès');
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export default createNewTasksSlice.reducer;
