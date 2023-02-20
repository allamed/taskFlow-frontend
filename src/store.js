import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import allTasksSlice from "./features/tasks/allTasksSlice";
import allProjectsSlice from "./features/project/projectSlice";
import currentProjectSlice from "./features/currentProject/currentProjectSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allTasks: allTasksSlice,
    allProjects: allProjectsSlice,
    currentProject: currentProjectSlice,
    //newTask: addNewTaskSlice,
  },
});
