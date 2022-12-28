import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Loading } from '../../components';
import { getAllProjects } from '../../features/project/projectSlice';
import Project from '../../components/Project';
import { useEffect } from 'react';

export const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const { isLoading, projects, totalProjects } = useSelector(
    (store) => store.allProjects
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <h5>
        Total : {totalProjects} projet{totalProjects > 1 && 's'}
      </h5>
      <div className='jobs'>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
