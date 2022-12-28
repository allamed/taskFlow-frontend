import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createProject,
  editProject,
} from '../../features/project/projectSlice';
import { useEffect } from 'react';
const AddProject = () => {
  /* 
  const {
    isLoading,
    // id,
    nom,
    chef,
    // membres,
    debut,
    // taches,
    avancement,
    isEditing,
    editProjectId,
  } = useSelector((store) => store.project);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !debut || !chef) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    if (isEditing) {
      dispatch(
        editProject({
          projectId: editProjectId,
          project: { nom, debut, avancement },
        })
      );
      return;
    }
    dispatch(createProject({ nom, chef, debut }));
  };

  const handleProjectInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'projectLocation',
          value: user.location,
        })
      );
    }
  }, []);
 */
  return <h1>add project</h1>;
};
export default AddProject;
