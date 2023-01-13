import React from 'react';
import Wrapper from '../assets/wrappers/TaskModal';
import { AiOutlineClose } from 'react-icons/ai';
import TaskDetails from './TaskDetails';

export const TaskModal = ({ currentTask, toggleModal }) => {
  return (
    <Wrapper>
      <div>
        <div className='modal'>
          <div className='modal-body'>
            <button onClick={toggleModal} className='back-button'>
              <AiOutlineClose />
            </button>
            <TaskDetails task={currentTask} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
