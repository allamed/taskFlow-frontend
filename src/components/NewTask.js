import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Wrapper from '../assets/wrappers/TaskModal';
import ProjectInfo from './ProjectInfo';
import { BiTask } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const NewTask = ({
  handleCloseModal,
  membersList,
  title,
  setTitle,
  assignee,
  setAssignee,
  deadline,
  setDeadline,
  addNewTask,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !assignee) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    addNewTask();
    handleCloseModal();
  };

  return (
    <Wrapper>
      <div>
        <div className='modal '>
          <div className='modal-body'>
            <header>
              <button onClick={handleCloseModal} className='back-button'>
                <AiOutlineClose />
              </button>
              <ProjectInfo icon={<BiTask />} text='Nouvelle tache' />
            </header>

            <form onSubmit={handleSubmit} style={{ marginTop: '5%' }}>
              <label htmlFor='title' className='form__label'>
                Intitulé de la tache:
              </label>
              <input
                type='text'
                id='title'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className='form__input'
              />
              <br />
              <label htmlFor='assignee' className='form__label'>
                Assignée à:
              </label>
              <div className='form__select-container'>
                <select
                  id='assignee'
                  value={assignee}
                  onChange={(event) => setAssignee(event.target.value)}
                  className='form__select'
                  placeholder='choisir un membre'
                >
                  {membersList.map((member) => {
                    //console.log(member.nom);
                    return (
                      <option
                        value={member.nom}
                        key={member.id}
                        style={{ color: 'black' }}
                      >
                        {member.nom}
                      </option>
                    );
                  })}
                </select>
                <FaCaretDown className='form__select-icon' />
              </div>
              <br />
              <label htmlFor='deadline' className='form__label'>
                Deadline:
              </label>
              <div className='form__datepicker-container'>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  id='deadline'
                  className='form__input'
                />
                <FaCalendarAlt className='form__datepicker-icon' />
              </div>
              <br />
              <button type='submit' className='form__button'>
                Add task
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewTask;
