import React from 'react';
import Board from 'react-trello';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks } from '../../features/tasks/allTasksSlice';
import { Loading } from '../../components';
import { useEffect } from 'react';
import { mapData } from '../../utils/taskMaper';
import { useState } from 'react';
import { updateTaskState } from '../../features/tasks/allTasksSlice';

export const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const { isLoading, tasks, totalTasks } = useSelector(
    (store) => store.allTasks
  );
  const taskData = mapData(tasks);
  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const info = { idTache: cardId, nouveauEtat: targetLaneId };
    dispatch(updateTaskState(info));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <h5>
        Total : {totalTasks} tache{tasks.length > 1 && 's'}
      </h5>
      <Board
        data={taskData}
        editable
        cardDraggable
        style={{ backgroundColor: ' #f0f4f8' }}
        handleDragEnd={handleDragEnd}
      />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .react-trello-lane {
    border: 50;
    background-color: #bfc5fe;
  }
`;
