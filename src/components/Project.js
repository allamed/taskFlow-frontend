import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch, useSelector } from "react-redux";
import ProjectInfo from "./ProjectInfo";
import moment from "moment";
import {
  setCurrentProject,
  getProjectTasks,
  clearCurrentProjectState,
  getProjectMembers,
} from "../features/currentProject/currentProjectSlice";
import { toggleSidebar } from "../features/user/userSlice";

import {
  deleteProject,
  getTasksByProject,
  setEditProject,
} from "../features/project/projectSlice";
import React, { useEffect, useState } from "react";
import { stringAvatar } from "../utils/utilsFunctions";
import { Avatar, AvatarGroup, Stack } from "@mui/material";
import { urlBase } from "../utils/axios";
import userIcon from "../assets/images/user.png";
import UserAvatar from "./UserAvatar";

const Project = ({
  id,
  nom,
  membres,
  debut,

  chef,

  isSidebarOpen,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSidebarOpen) dispatch(toggleSidebar());
    getTasksByProject(id);

    //console.log("tasks= " + tasks.length);
  }, []);

  const date = moment(debut).format("MMM Do, YYYY");
  const members = membres.filter(
    (item, index) => membres.findIndex((i) => i.id === item.id) === index
  );
  function timePassed(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInMilliseconds = now - date;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    const differenceInDaysRounded = Math.floor(differenceInDays);
    return differenceInDaysRounded;
  }
  const [tasks, setTasks] = useState([]);
  const getTasksByProject = async (projectId) =>
    await fetch(`${urlBase}/projets/${projectId}/tasks`).then(
      async (response) => {
        if (response.ok) {
          const data = await response.json();
          setTasks(data.taches);
        } else console.log(response);
        return;
      }
    );

  /*getUserImage(id) {
    fetch(`${urlBase}/image/info/${id}`)
      .then((response) => {
        if (response.ok) return response.blob();
        return;
      })
      .then((blob) => {
        if (blob) {
          const urlx = URL.createObjectURL(blob);
          setUrl(urlx);
          //console.log(urlx);
        }
      })
      .catch((error) => {
        setUrl(userIcon);
      });
  }*/

  return (
    <Wrapper>
      <header style={{ backgroundColor: "#f3f0f8" }}>
        {/*<div className='main-icon'>{nom.charAt(0)}</div>*/}
        <Avatar {...stringAvatar(nom)} style={{ margin: "4%" }} />
        <div className="info" style={{ marginLeft: "4%" }}>
          <h5>{nom}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ProjectInfo icon={<FaCalendarAlt />} text={`début ${debut}`} />
          <ProjectInfo
            icon={<FaBriefcase />}
            text={`depuis ${timePassed(debut)} jours`}
          />
          <ProjectInfo
            icon={<IoPeopleOutline />}
            text={` ${tasks.length} taches`}
          ></ProjectInfo>
          <ProjectInfo
            icon={<IoPeopleOutline />}
            text={` ${members.length} membres`}
          ></ProjectInfo>
          <div style={{ height: "25", float: "right" }}>
            <AvatarGroup max={4} sx={{ marginLeft: "10%" }}>
              {members.map((item) => {
                return <UserAvatar id={item.id} nom={item.nom} />;
              })}
            </AvatarGroup>
          </div>
        </div>
        <footer>
          <div className="actions" style={{ float: "center" }}>
            <Link
              to={{
                pathname: "/project-details",
                state: { currentProject: { id, nom, membres, debut } },
              }}
              className="btn edit-btn"
              onClick={() => {
                const project = { id, nom, membres, debut };
                dispatch(clearCurrentProjectState());
                dispatch(setCurrentProject(project));
                dispatch(getProjectTasks(project.id));
                dispatch(getProjectMembers(project.id));
                if (isSidebarOpen) dispatch(toggleSidebar());
              }}
            >
              Voir plus
            </Link>
            {/*<button
                  type='button'
                  className='btn delete-btn'
                  onClick={() => console.log('edit')}
                >
                  Arreter le projet
                </button>*/}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Project;
