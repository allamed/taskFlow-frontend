import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import ProjectInfo from './ProjectInfo';
import moment from 'moment';
import {
  deleteProject,
  setEditProject,
} from '../features/project/projectSlice';
const Project = ({ id, nom, membres, debut, taches }) => {
  const dispatch = useDispatch();

  const date = moment(debut).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{nom.charAt(0)}</div>
        <div className='info'>
          <h5>{date}</h5>
          <p>{taches}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ProjectInfo icon={<FaLocationArrow />} text={nom} />
          <ProjectInfo icon={<FaCalendarAlt />} text={debut} />
          <ProjectInfo icon={<FaBriefcase />} text='todo' />
          <div className={`status 10`}>todo</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-project'
              className='btn edit-btn'
              onClick={() => console.log('edit')}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => console.log('delete btn')}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Project;
