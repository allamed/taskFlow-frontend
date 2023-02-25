import Wrapper from "../../assets/wrappers/DashboardFormPage";

import { useEffect, useState } from "react";
import { Chart } from "apexcharts";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserParticipationProjects,
  setDashboardText,
  updateUser,
} from "../../features/user/userSlice";
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { urlBase } from "../../utils/axios";
import userIcon from "../../assets/images/user.png";

import { RiCloseLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import customFetch from "../../utils/axios";
import { GrTask } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { FcParallelTasks } from "react-icons/fc";
import { MDBCardFooter, MDBCardTitle } from "mdbreact";
import { getAllTasks } from "../../features/tasks/allTasksSlice";
import { getAllProjects } from "../../features/project/projectSlice";
import Chart1 from "../../components/Chart1";

const Profile = () => {
  const { isLoading, user, userImage, userParticipationProjects } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboardText("Profile"));
    dispatch(getAllTasks());
    dispatch(getAllProjects());
    getUserImage(getUserFromLocalStorage().id);
    dispatch(getUserParticipationProjects());
  }, []);
  //console.log("projects" + userParticipationProjects);

  const [formIsOpen, setFormIsOpen] = useState(false);
  const { projects } = useSelector((store) => store.allProjects);
  const { tasks } = useSelector((store) => store.allTasks);

  const createdProjects = projects;
  const receivedTasks = tasks;
  const validatedTasks = tasks.filter((card) => card.etat == "VALIDEE");

  const [imageUrl, setImageUrl] = useState("");

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  function onImageChange(e) {
    setImageUrl(e.target.files[0]);
  }

  function updateImage() {
    const data = new FormData();
    data.append("image", imageUrl);
    const userId = getUserFromLocalStorage().id;
    //data.append("userId", userId);
    axios.post(`${urlBase}/image/${userId}`, data).then(
      (res) => {
        toast.success("l'image a été mise à jour");
        toggleForm();
        //dispatch(getUserImage()).then(console.log(userImage));
        getUserImage(getUserFromLocalStorage().id);
      },
      () => {
        toast.error("l'image n'a pas été mise à jour");
      }
    );
  }
  const [url, setUrl] = useState(userIcon);
  function getUserImage(id) {
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
  }

  const value2 = 60;
  const value1 = 65;

  return (
    <>
      <MDBCard>
        <div
          className="rounded-top text-white d-flex flex-row"
          style={{ backgroundColor: "#F6F2FF", height: "200px" }}
        >
          <div
            className="ms-4 mt-5 d-flex flex-column"
            style={{ width: "150px" }}
          >
            <MDBCardImage
              src={url}
              alt={""}
              className="mt-4 mb-2 img-thumbnail"
              //fluid
              style={{
                width: "150px",
                zIndex: "1",
                color: "gray",
              }}
            />

            <MDBBtn
              outline
              color="dark"
              style={{ height: "36px", overflow: "visible" }}
              onClick={toggleForm}
            >
              modifier
            </MDBBtn>
            {formIsOpen && (
              <div
                style={{
                  backgroundColor: "initial",
                  zIndex: "1",
                  marginTop: "5%",
                  display: "flex",
                  width: "200%",
                }}
              >
                <input
                  className="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  //value={imageUrl}
                  style={{ width: "160%", height: "75%" }}
                  onChange={onImageChange}
                />
                <button
                  role="button"
                  style={{
                    padding: "10px",

                    border: "none",
                    float: "right",
                    position: "relative",
                    backgroundColor: "initial",
                  }}
                  onClick={updateImage}
                >
                  <MdDone
                    style={{
                      fontSize: "large",
                      marginBottom: "10%",
                      color: "#535c68",
                    }}
                  />
                </button>
                <button
                  role="button"
                  style={{
                    padding: "10px",

                    border: "none",
                    float: "right",
                    position: "relative",
                    backgroundColor: "initial",
                  }}
                  onClick={() => toggleForm()}
                >
                  <RiCloseLine
                    style={{
                      fontSize: "large",
                      marginBottom: "10%",
                      color: "gray",
                    }}
                  />
                </button>
              </div>
            )}
          </div>
          <div
            className="ms-3"
            style={{
              marginTop: "130px",
              color: "#1E003D",
            }}
          >
            <MDBTypography tag="h5" style={{ marginBottom: "0" }}>
              {user.nom}
            </MDBTypography>
          </div>
        </div>
        <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="d-flex justify-content-end text-center py-1">
            <div>
              <MDBCardText className="small text-muted mb-0">
                {user.email}
              </MDBCardText>
            </div>
          </div>
        </div>
        <MDBCardBody className="text-black p-4">
          <div className="mb-5">
            <p className="lead fw-normal mb-1">About</p>
            <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
              <MDBCardText className="font-italic mb-1">
                Web Developer
              </MDBCardText>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <MDBCardText className="lead fw-normal mb-0">
              Statistiques
            </MDBCardText>
          </div>
          <MDBRow className="row-cols-1 row-cols-md-4 g-7">
            <MDBCol>
              <MDBCard className="h-100" style={{ alignItems: "center" }}>
                {/* <MDBCardImage
                src={createdProject}
                alt="..."
                position="top"
                style={{
                  height: "40%",
                  width: "40%",
                  marginTop: "10%",
                }}
              />*/}
                <MDBCardBody>
                  <MDBCardTitle
                    style={{ color: "#9b59b6", fontSize: "xxx-large" }}
                  >
                    {createdProjects.length > 9
                      ? createdProjects.length
                      : `0${createdProjects.length}`}
                  </MDBCardTitle>
                  {/* <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>*/}
                </MDBCardBody>
                <MDBCardFooter>
                  <smmedium className="text-muted">Projets créés</smmedium>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-100" style={{ alignItems: "center" }}>
                {/*<MDBCardImage
                src={projectsParticipation}
                alt="..."
                position="top"
                style={{ height: "40%", width: "40%", marginTop: "10%" }}
              />*/}
                <MDBCardBody>
                  <MDBCardTitle
                    style={{ color: "#e67e22", fontSize: "xxx-large" }}
                  >
                    {userParticipationProjects.length > 9
                      ? userParticipationProjects.length
                      : `0${userParticipationProjects.length}`}
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter>
                  <medium className="text-muted">
                    Participations à d'autres projets
                  </medium>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="h-100" style={{ alignItems: "center" }}>
                {/* <MDBCardImage
                src={receivedTasks}
                alt="..."
                position="top"
                style={{ height: "40%", width: "40%", marginTop: "10%" }}
              />*/}
                <MDBCardBody>
                  <MDBCardTitle
                    style={{ color: "#9b59b6", fontSize: "xxx-large" }}
                  >
                    {receivedTasks.length > 9
                      ? receivedTasks.length
                      : `0${receivedTasks.length}`}
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter>
                  <medium className="text-muted">Taches recues</medium>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard className="h-100" style={{ alignItems: "center" }}>
                {/*<MDBCardImage
                src={validatedTasks}
                alt="..."
                position="top"
                style={{ height: "40%", width: "40%", marginTop: "10%" }}
              />*/}
                <MDBCardBody>
                  <MDBCardTitle
                    style={{ color: "#e67e22", fontSize: "xxx-large" }}
                  >
                    {validatedTasks.length > 9
                      ? validatedTasks.length
                      : `0${validatedTasks.length}`}
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter>
                  <medium className="text-muted">Taches validées</medium>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          {/*<MDBRow style={{ float: "center" }}>
          <MDBCol className="col-md-4">
            <MDBContainer>
              <GrTask />
            </MDBContainer>
          </MDBCol>
          <MDBCol className="col-md-4">
            <MDBContainer>
              <FaTasks style={{ fontSize: "xx-large" }} />
            </MDBContainer>
          </MDBCol>
          <MDBCol className="col-md-4">
            <MDBContainer>
              <FcParallelTasks />
            </MDBContainer>
          </MDBCol>
        </MDBRow>*/}
        </MDBCardBody>
        <MDBRow className="row-cols-1 row-cols-md-2 g-7">
          <MDBCol>
            <MDBCard className="h-100" style={{ alignItems: "center" }}>
              <MDBCardBody>
                <Chart1
                  x1={{ name: "projets créés", value: createdProjects.length }}
                  x2={{
                    name: "participations aux projets",
                    value: userParticipationProjects.length,
                  }}
                />
              </MDBCardBody>
              <MDBCardFooter>
                <smmedium className="text-muted">Projets </smmedium>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" style={{ alignItems: "center" }}>
              <MDBCardBody>
                <Chart1
                  x1={{ name: "taches recues", value: receivedTasks.length }}
                  x2={{ name: "taches validées", value: validatedTasks.length }}
                />
              </MDBCardBody>
              <MDBCardFooter>
                <medium className="text-muted">Taches </medium>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};
export default Profile;
