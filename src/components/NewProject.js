import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Wrapper from "../assets/wrappers/TaskModal";
import ProjectInfo from "./ProjectInfo";
import { BiTask } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

import { toast } from "react-toastify";

const NewProject = ({ handleCloseModal, title, setTitle, addNewProject }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      toast.error("Veuillez donner un titre à votre projet!");
      return;
    }
    addNewProject();
    handleCloseModal();
  };

  return (
    <Wrapper>
      <div>
        <div className="modal ">
          <div className="modal-body" style={{ height: "auto" }}>
            <header>
              <button onClick={handleCloseModal} className="back-button">
                <AiFillCloseCircle />
              </button>
              <ProjectInfo icon={<BiTask />} text="Nouveau projet" />
            </header>

            <form onSubmit={handleSubmit} style={{ marginTop: "5%" }}>
              <label htmlFor="title" className="form__label">
                titre du projet :
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="form__input"
              />
              <br />
              <button type="submit" className="form__button">
                Créer un projet
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewProject;
