import React from "react";
import Board from "react-trello";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../features/tasks/allTasksSlice";
import { Loading } from "../../components";
import { useEffect } from "react";
import { mapData } from "../../utils/taskMaper";
import { useState } from "react";
import { updateTaskState } from "../../features/tasks/allTasksSlice";
import { TaskModal } from "../../components/TaskModal";
import { Divider } from "@mui/material";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getCurrentTask } from "../../features/currentProject/currentProjectSlice";
import { setDashboardText } from "../../features/user/userSlice";

export const Tasks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(setDashboardText("Tâches reçues"));
  }, []);
  const navigate = useNavigate();

  const { isLoading, tasks, mapedTasks, totalTasks } = useSelector(
    (store) => store.allTasks
  );
  const { project } = useSelector((store) => store.currentProject);

  //const taskData = mapData(tasks);
  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const info = { idTache: cardId, nouveauEtat: targetLaneId };
    dispatch(updateTaskState(info));
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  function handleCardClick(taskId) {
    if (!modalIsOpen) toggleModal();
    dispatch(getCurrentTask(taskId));
    setCurrentTaskId(taskId);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="main">
        <div style={{ paddingLeft: "5%" }}>
          <p style={{ marginBottom: "2px", color: "#576574" }}>
            {totalTasks} tache{tasks.length > 1 && "s"} trouvée
            {tasks.length > 1 && "s"}
          </p>
          <Divider sx={{ marginBottom: "2%", marginTop: "2px" }} />
          <p
            style={{
              marginBottom: "2px",
              color: "#576574",
              fontSize: "smaller",
              marginLeft: "35%",
            }}
          >
            cliquez sur la tache pour voir plus
          </p>
          <Board
            data={mapData(tasks, false)}
            editable
            cardDraggable
            style={{ backgroundColor: " #F6F2FF" }}
            handleDragEnd={handleDragEnd}
            onCardClick={(cardId) => handleCardClick(cardId)}
          />
          {modalIsOpen && (
            <TaskModal
              currentTaskId={currentTaskId}
              toggleModal={toggleModal}
              chef={false}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .react-trello-lane {
    border: 50;
    background-color: #bfc5fe;
  }
  .main {
    background-color: #f9f6ff;

    border-radius: 1%;
    padding: 1%;
  }
`;
