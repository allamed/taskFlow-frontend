import React from 'react';
import { Loading, TeamMember } from '../../components';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import Wrapper from '../../assets/wrappers/ProjectDetails';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Board from 'react-trello';
import NewCardForm from 'react-trello';
import CardSubmitButton from 'react-trello';
import { mapData } from '../../utils/taskMaper';
import { updateTaskState } from '../../features/tasks/allTasksSlice';
import { useState } from 'react';
import NewTask from '../../components/NewTask';
import { createTask } from '../../features/tasks/addNewTaskSlice';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

import {
  getProjectTasks,
  getProjectMembers,
} from '../../features/currentProject/currentProjectSlice';
import { TaskModal } from '../../components/TaskModal';
import { GiLargeDress } from 'react-icons/gi';

export const ProjetcDetails = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store.currentProject);
  console.log(project);

  //dispatch(getProjectMembers(project.id));
  //dispatch(getProjectTasks(project.payload.id));

  const { tasks, isLoading } = useSelector((store) => store.currentProject);
  //console.log('les taches');
  //console.log(tasks);
  const membersDup = [...project.payload.membres];
  const members = membersDup.filter(
    (item, index) => membersDup.findIndex((i) => i.id === item.id) === index
  );
  console.log(members);

  const [taskData, setTaskData] = useState(tasks);

  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const info = { idTache: cardId, nouveauEtat: targetLaneId };
    dispatch(updateTaskState(info));
    setTaskData(tasks);
    //setBoardHeight(getMaxCardsPerLane() * 200);
    //setValue(value + 1);

    //setTaskData(mapData(tasks));
  };
  const getMaxCardsPerLane = () => {
    let maxCards = 0;
    mapData(tasks).lanes.forEach((lane) => {
      maxCards = Math.max(maxCards, lane.cards.length);
    });

    return maxCards;
  };
  const getAvancement = () => {
    return (
      tasks.reduce((total, task) => total + task.avancement, 0) / tasks.length
    );
  };
  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleCardClick = (taskId) => {
    toggleModal();
    const task = tasks.find((t) => {
      return t.id == taskId;
    });
    console.log('current task');

    setCurrentTask(task);
  };
  const [boardHeight, setBoardHeight] = useState(500);
  const [newTaskModalIsOpen, setNewTaskModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setNewTaskModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setNewTaskModalIsOpen(false);
    setTitle('');
    setAssignee('');
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
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [deadline, setDeadline] = useState(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className='main'>
        <header>
          <div className='main-icon'>{project.payload.nom.charAt(0)}</div>

          <div className='info'>
            <h5>{project.payload.nom}</h5>
          </div>
        </header>

        <div className='projet'>
          <div className='details'>
            <div className='progress'>
              <h5
                style={{
                  color: '#48484C',

                  marginBottom: 3,
                  fontSize: 'large',
                }}
              >
                {' '}
                {!isNaN(getAvancement()) && `Avancement ${getAvancement()} %`}
              </h5>
              <progress value={getAvancement()} max='100' />
            </div>
            <header />
            <div className='board-container'>
              <h5
                style={{
                  color: '#48484C',

                  marginBottom: 10,
                  marginTop: 40,
                }}
              >
                Taches du projet
              </h5>
              <Board
                data={mapData(tasks)}
                editable
                cardDraggable
                style={{
                  backgroundColor: ' #f0f4f8',
                  height: '400px',
                  paddingTop: '1%',
                }}
                handleDragEnd={handleDragEnd}
                onCardClick={(cardId) => handleCardClick(cardId)}
              >
                <NewCardForm
                  descriptionPlaceholder='assignée à '
                  labelPlaceholder='deadLine'
                  titlePlaceholder='intitulé'
                  onSubmit={(card) => console.log(card)}
                >
                  <CardSubmitButton />
                </NewCardForm>
              </Board>
            </div>
          </div>
          <div className='membres'>
            <h5
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              membres du projet
            </h5>
            {members.map((member) => {
              return <TeamMember key={member.id} member={member} />;
            })}

            <button
              style={{
                backgroundColor: 'initial',
                display: 'block',
                margin: 'auto',
                border: 'none',
                color: 'white',
              }}
            >
              <MdOutlineAddCircleOutline
                style={{ color: 'white', fontSize: '30px', cursor: 'hand' }}
              />
            </button>
          </div>

          <div style={{ clear: 'both' }} />
        </div>
        {modalIsOpen && (
          <TaskModal currentTask={currentTask} toggleModal={toggleModal} />
        )}
        <button
          onClick={handleOpenModal}
          className='btn'
          style={{ margin: '1%' }}
        >
          Add new task
        </button>
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
