import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import ProjectInfo from './ProjectInfo';
import moment from 'moment';
import {
  setCurrentProject,
  getProjectTasks,
  clearCurrentProjectState,
} from '../features/currentProject/currentProjectSlice';

import {
  deleteProject,
  setEditProject,
} from '../features/project/projectSlice';
const Project = ({ id, nom, membres, debut, taches, chef }) => {
  const dispatch = useDispatch();

  const date = moment(debut).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{nom.charAt(0)}</div>
        <div className='info'>
          <h5>{nom}</h5>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ProjectInfo icon={<FaCalendarAlt />} text={`début ${debut}`} />
          <ProjectInfo
            icon={<FaBriefcase />}
            text={`Chef de projet : ${chef.nom}`}
          />
          <ProjectInfo
            icon={<IoPeopleOutline />}
            text={` ${membres.length} membres`}
          />
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/project-details'
              className='btn edit-btn'
              onClick={() => {
                const project = { id, nom, membres, debut, taches };
                dispatch(clearCurrentProjectState());
                dispatch(setCurrentProject(project));
                dispatch(getProjectTasks(project.id));
              }}
            >
              Voir plus
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => console.log('edit')}
            >
              Arreter le projet
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Project;
