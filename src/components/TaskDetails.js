import React, { useState } from 'react';
import { Comments } from './Comments'; // a custom component for displaying comments
import Wrapper from '../assets/wrappers/TaskDetails';
import { MdOutlineSubtitles } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import { FaProjectDiagram } from 'react-icons/fa';
import { TfiTimer } from 'react-icons/tfi';
import { GiStairsGoal } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import ProjectInfo from './ProjectInfo';
import { BiTask } from 'react-icons/bi';

function TaskDetails({ task }) {
  const [progress, setProgress] = useState(task.avancement);
  console.log(``);

  /* const handleProgressChange = (event) => {
    setProgress(event.target.value);
  }; */

  return (
    <Wrapper>
      <header className='taskTitle'>
        <ProjectInfo icon={<BiTask />} text={task.titre} />
      </header>

      <header>
        <div className='content'>
          <div className='content-center'>
            <ProjectInfo
              icon={<BiTimeFive />}
              text={`Date de début : ${task.debut}`}
            />
          </div>
          <div className='content-center'>
            <ProjectInfo icon={<BsPerson />} text={task.responsable.nom} />
          </div>
          <div className='content-center'>
            <ProjectInfo icon={<FaProjectDiagram />} text={task.projet.nom} />
          </div>
          <div className='content-center'>
            <ProjectInfo icon={<TfiTimer />} text={task.deadLine} />
          </div>
          <footer></footer>
        </div>
      </header>
      <header>
        <div className='content'>
          <p>Avancement</p>
          <progress value={task.avancement} max='100' />

          <div className='content-center'>
            <ProjectInfo icon={<AiOutlineFileDone />} text={task.etat} />
          </div>

          <footer></footer>
        </div>
      </header>
      <header>
        <div className='content'>
          <div className='content-center'>
            <ProjectInfo icon={<BiCommentDetail />} text={`comments`} />
          </div>
          <footer></footer>
        </div>
      </header>
    </Wrapper>
  );
}
export default TaskDetails;
