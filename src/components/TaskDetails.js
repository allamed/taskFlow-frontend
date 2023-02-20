import React, { useEffect, useState } from "react";
import { Comments } from "./Comments"; // a custom component for displaying comments
import Wrapper from "../assets/wrappers/TaskDetails";
import { MdDone } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { GiStairsGoal } from "react-icons/gi";
import { AiOutlineSave } from "react-icons/ai";
import ProjectInfo from "./ProjectInfo";
import { BiTask } from "react-icons/bi";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";
import CustomInput from "./CustomInput";
import {
  updateTaskDeadLine,
  updateTaskDesc,
  updateTaskTitle,
  addCommentToTask,
  getCurrentTask,
  updateTaskProgress,
} from "../features/currentProject/currentProjectSlice";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";
import { getAllTasks } from "../features/tasks/allTasksSlice";
import NumericInput from "react-numeric-input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setDashboardText } from "../features/user/userSlice";

function TaskDetails({ taskId, chef, toggleModal, handleCardClick }) {
  const dispatch = useDispatch();
  /*useEffect(() => {
    console.log(" TaskDetail : currentTaskId : " + taskId);
    dispatch(getCurrentTask(taskId));
    toast.info("getcurrentTask called");
  }, []);*/

  const { currentTask } = useSelector((store) => store.currentProject);
  const task = currentTask;
  const comments = task.commentaires;

  const updateTitle = async (newTitle) => {
    const info = { taskId: task.id, newTitle: newTitle };
    //setTaskValues({...taskValues, titre:newTitle});

    dispatch(updateTaskTitle(info)).then(dispatch(getCurrentTask(taskId)));
  };
  const updateDesc = async (newDesc) => {
    const info = { taskId: task.id, newDesc: newDesc };
    //setTaskValues({...taskValues, description:newDesc});

    return await dispatch(updateTaskDesc(info)).then(
      dispatch(getCurrentTask(taskId))
    );
  };
  const updateDeadLine = async (newDeadLine) => {
    if (chef) {
      const info = { taskId: task.id, newDeadLine: newDeadLine };
      dispatch(updateTaskDeadLine(info)).then(dispatch(getCurrentTask(taskId)));
    } else toast.error("seul le chef de projet peut modifier le deadLine");
  };
  const addComment = async (data) => {
    const info = {
      text: data.text,
      authorId: getUserFromLocalStorage().id,
      taskId: task.id,
    };
    return await dispatch(addCommentToTask(info))
      .then(dispatch(getCurrentTask(taskId)))
      .then(dispatch(getAllTasks()));
  };

  const updateProgress = async (value) => {
    value.preventDefault();
    const info = { taskId: task.id, newProgres: newProgress };
    //setTaskValues({...taskValues, description:newDesc});

    return await dispatch(updateTaskProgress(info)).then(
      dispatch(getCurrentTask(taskId))
    );
  };

  function toggleEditProgressForm() {
    setEditProgressFormIsOpen(!editProgressFormIsOpen);
  }

  const [editProgressFormIsOpen, setEditProgressFormIsOpen] = useState(false);
  const [newProgress, setNewProgress] = useState(task.avancement);
  let displayType = "none";
  if (!chef) displayType = "block";

  return (
    <Wrapper>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            <p>Title</p>
          </div>
          <CustomInput
            defaultValue={task.titre}
            text={task.titre}
            placeholder="Enter Title"
            onSubmit={updateTitle}
            chef={chef}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            <p>Description</p>
          </div>
          <CustomInput
            defaultValue={task.description}
            text={task.description || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
            chef={chef}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            <p>DeadLine</p>
          </div>
          <input
            type="date"
            value={task.deadLine}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDeadLine(event.target.value)}
            readOnly={!chef}
          />
        </div>
        <header />

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <CheckSquare />
            <p>Avancement</p>
            <button
              className={chef ? "notDisplay" : "hhh"}
              style={{
                backgroundColor: "initial",

                marginLeft: "80%  ",
                marginTop: "5px",
                border: "none",
                float: "right",
              }}
              onClick={toggleEditProgressForm}
            >
              <MdOutlineEdit
                style={{ color: "black", fontSize: "25px", cursor: "hand" }}
              />
            </button>
          </div>
          <div
            className="cardinfo-box-progress-bar"
            style={{ marginBottom: "5%" }}
          >
            <progress value={newProgress} max="100" />
            <p style={{ marginLeft: "8px", color: "#6ab04c" }}>
              {newProgress} %
            </p>
          </div>

          {editProgressFormIsOpen && (
            <Form
              onSubmit={updateProgress}
              style={{ marginLeft: "6%", marginTop: "3%", marginRight: "6%" }}
            >
              <div
                className="form-group "
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "center",
                }}
              >
                <input
                  type="number"
                  value={newProgress}
                  min={0}
                  max={100}
                  onChange={(event) => setNewProgress(event.target.value)}
                  readOnly={chef}
                  autoFocus
                  style={{
                    width: "60px",
                    padding: "4px",
                    borderColor: "#95a5a6",
                    borderRadius: "5px",
                    borderWidth: "thin",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    marginLeft: "10px",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <MdDone style={{ color: "#535c68", fontSize: "20" }} />
                </button>
              </div>
            </Form>
          )}

          <header />

          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <BiCommentDetail />
              <p>Commentaires</p>
            </div>
            <Comment comments={comments} addComment={addComment} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default TaskDetails;
