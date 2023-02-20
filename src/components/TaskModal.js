import React from "react";
import Wrapper from "../assets/wrappers/TaskModal";
import { AiFillCloseCircle } from "react-icons/ai";
import TaskDetails from "./TaskDetails";
import { RiArrowGoBackLine } from "react-icons/ri";

export const TaskModal = ({ currentTaskId, toggleModal, chef }) => {
  return (
    <Wrapper>
      <div>
        <div className="modal">
          <div className="modal-body">
            <button
              className="button-81"
              role="button"
              style={{ padding: "7px", marginLeft: "5px", marginBottom: "5px" }}
              onClick={toggleModal}
            >
              <RiArrowGoBackLine style={{ fontSize: "large" }} />
            </button>

            <TaskDetails
              taskId={currentTaskId}
              chef={chef}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
