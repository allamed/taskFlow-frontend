import axios from "axios";
import { clearStore } from "../features/user/userSlice";
import { getUserFromLocalStorage } from "./localStorage";

export const urlBase = "https://10.72.176.108:9455";
const customFetch = axios.create({
  baseURL: urlBase,
});

/* customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
});
*/
export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data);
};

export default customFetch;
