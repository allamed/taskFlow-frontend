import React from "react";
import { Loading, TeamMember } from "../../components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import Wrapper from "../../assets/wrappers/ProjectDetails";
import ProgressBar from "react-bootstrap/ProgressBar";
import Board from "react-trello";
import NewCardForm from "react-trello";
import CardSubmitButton from "react-trello";
import { mapData } from "../../utils/taskMaper";

import { useState } from "react";
import NewTask from "../../components/NewTask";

import { MdOutlineAddCircleOutline } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  getProjectTasks,
  updateTaskState,
  createTask,
  getProjectMembers,
  addMemberToProject,
  getCurrentProject,
  getCurrentTask,
} from "../../features/currentProject/currentProjectSlice";
import { TaskModal } from "../../components/TaskModal";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../utils/utilsFunctions";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getAllTasks } from "../../features/tasks/allTasksSlice";
import { setDashboardText } from "../../features/user/userSlice";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBCard, MDBCardHeader, MDBCardText } from "mdbreact";

export const ProjetcDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboardText("Détails du projet"));
  }, []);
  const { project } = useSelector((store) => store.currentProject);
  console.log(project);

  //dispatch(getProjectMembers(project.id));
  //dispatch(getProjectTasks(project.payload.id));

  const { tasks, isLoading } = useSelector((store) => store.currentProject);
  //console.log('les taches');
  //console.log(tasks);
  const membersDup = useSelector((store) => store.currentProject).members;
  // [...project.payload.membres];
  const members = membersDup.filter(
    (item, index) => membersDup.findIndex((i) => i.id === item.id) === index
  );
  //console.log(members);

  const [taskData, setTaskData] = useState(tasks);

  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const info = { idTache: cardId, nouveauEtat: targetLaneId };
    dispatch(updateTaskState(info));
    setTaskData(tasks);
    //setBoardHeight(getMaxCardsPerLane() * 200);
    //setValue(value + 1);

    //setTaskData(mapData(tasks));
  };
  let navigate = useNavigate();

  const getAvancement = () => {
    return Math.round(
      tasks.reduce((total, task) => total + task.avancement, 0) / tasks.length
    );
  };
  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState({});

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleCardClick = (taskId) => {
    if (!modalIsOpen) toggleModal();
    dispatch(getCurrentTask(taskId));
    setCurrentTaskId(taskId);
  };

  const [newTaskModalIsOpen, setNewTaskModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setNewTaskModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setNewTaskModalIsOpen(false);
    setTitle("");
    setAssignee("");
    setDeadline(null);
  };
  const addNewTask = () => {
    const newTask = {
      title,
      responsableId: members.find((m) => m.nom == assignee).id,
      deadline,
      projectId: project.payload.id,
    };
    dispatch(createTask(newTask));
  };
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [addMemberFormIsOpen, setAddMemberFormIsOpen] = useState(false);
  const [emailToAdd, setEmailToAdd] = useState("");
  function toggleAddMemberForm() {
    setAddMemberFormIsOpen(!addMemberFormIsOpen);
  }
  function addMember(e) {
    e.preventDefault();
    if (members.find((x) => x.email == emailToAdd) != null) {
      toast.error("cet utilisateur fait déjà parti de votre projet");
      setEmailToAdd("");
      return;
    }
    const data = { email: emailToAdd, id: project.payload.id };
    dispatch(addMemberToProject(data));
    setEmailToAdd("");
    //console.log('add member with email '+ emailToAdd);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="main">
        <header>
          {/*<div className='main-icon'>{project.payload.nom.charAt(0)}</div>*/}
          <Avatar
            {...stringAvatar(project.payload.nom)}
            style={{ margin: "1%" }}
          />

          <div className="info">
            <h5>{project.payload.nom}</h5>
          </div>
        </header>

        {/*<div className="projet">*/}
        <MDBRow className="row-cols-1 row-cols-md-4 g-7">
          <MDBCol className="col-md-10">
            {/*<div className="details ">*/}
            <div className="progres">
              <h5
                style={{
                  color: "#48484C",

                  marginBottom: 3,
                  fontSize: "large",
                }}
              >
                {" "}
                {!isNaN(getAvancement()) && `Avancement ${getAvancement()} %`}
              </h5>
              <progress value={getAvancement()} max="100" />
            </div>
            <header />

            <div style={{ textAlign: "right" }}>
              <button
                className="button-81"
                role="button"
                style={{
                  padding: "7px",
                  marginLeft: "35px",
                  marginBottom: "5px",
                }}
                onClick={handleOpenModal}
                title="Créer une nouvelle tache"
              >
                <MdOutlineAddCircleOutline
                  style={{
                    fontSize: "xx-large",
                    cursor: "hand",
                  }}
                />
              </button>
            </div>

            <div className="board-container">
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
                data={mapData(tasks, true)}
                editable
                cardDraggable
                style={{
                  backgroundColor: " #F6F2FF",
                  //zIndex: '-1',

                  paddingTop: "1%",
                }}
                laneStyle={{ backgroundColor: " #D7CBF6" }}
                handleDragEnd={handleDragEnd}
                onCardClick={(cardId) => handleCardClick(cardId)}
              >
                <NewCardForm
                  descriptionPlaceholder="assignée à "
                  labelPlaceholder="deadLine"
                  titlePlaceholder="intitulé"
                  onSubmit={(card) => console.log(card)}
                >
                  <CardSubmitButton />
                </NewCardForm>
              </Board>
            </div>
            {/*</div>*/}
          </MDBCol>
          <MDBCol
            className="col-md-2"
            style={{ marginTop: "5%", borderRadius: "5%", borderColor: "gray" }}
          >
            {/*<div className="membres">*/}
            <MDBCard style={{ backgroundColor: "#f9f9ff" }}>
              <MDBCardHeader style={{ alignSelf: "center" }}>
                Membres
              </MDBCardHeader>

              {members.map((member) => {
                return <TeamMember key={member.id} member={member} />;
              })}

              <button
                className="button-81"
                role="button"
                title="ajouter un membre"
                onClick={toggleAddMemberForm}
                style={{
                  marginLeft: "40%",
                  marginRight: "40%",
                  padding: "3px",
                  marginBottom: "2%",
                }}
              >
                <MdOutlineAddCircleOutline style={{ fontSize: "larger" }} />
              </button>
              {addMemberFormIsOpen && (
                <Form
                  onSubmit={addMember}
                  style={{
                    marginLeft: "6%",
                    marginTop: "3%",
                    marginRight: "6%",
                  }}
                >
                  <div
                    className="form-group "
                    style={{ display: "grid", alignItems: "center" }}
                  >
                    <input
                      type="email"
                      value={emailToAdd}
                      onChange={(e) => setEmailToAdd(e.target.value)}
                      placeholder="Email"
                      required
                      style={{
                        borderRadius: "5px",
                        border: "none",
                        width: "100%",
                        height: "40px",
                      }}
                    />
                    <Button
                      type="submit"
                      style={{
                        marginTop: "3%",
                        fontSize: "12px",
                        marginLeft: "20%",
                        marginRight: "20%",
                        backgroundColor: "#32257A",
                        border: "none",
                      }}
                    >
                      Ajouter
                    </Button>
                  </div>
                </Form>
              )}
              {/*</div>*/}

              <div style={{ clear: "both" }} />
              {/*</div>*/}
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {modalIsOpen && (
          <TaskModal
            currentTaskId={currentTaskId}
            toggleModal={toggleModal}
            chef={true}
          />
        )}

        {newTaskModalIsOpen && (
          <NewTask
            handleCloseModal={handleCloseModal}
            membersList={members}
            title={title}
            setTitle={setTitle}
            assignee={assignee}
            setAssignee={setAssignee}
            deadline={deadline}
            setDeadline={setDeadline}
            addNewTask={addNewTask}
          />
        )}
      </div>
    </Wrapper>
  );
};
