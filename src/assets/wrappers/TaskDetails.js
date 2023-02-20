import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .taskTitle {
    display: flex;
    justify-content: center;
    font-size: larger;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  progress {
    /* Style the container */
    width: 80%; /* Set the width of the progress bar */
    height: 15px; /* Set the height of the progress bar */
    background-color: #ddd; /* Set the background color of the container */
    border-radius: 10px; /* Add rounded corners to the container */

    /* Style the progress bar */
    &::-webkit-progress-bar {
      background-color: #eee; /* Set the background color of the progress bar */
      border-radius: 5px; /* Add rounded corners to the progress bar */
    }

    &::-webkit-progress-value {
      background-color: #6ab04c; /* Set the progress bar color */
      border-radius: 5px; /* Add rounded corners to the progress bar */
    }
  }
  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--primary-300);
    }
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
  .cardinfo {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 550px;
  }

  .cardinfo-box {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .cardinfo-box-title {
    display: flex;
    gap: 10px;
    align-items: center;
    color: #30336b;
  }

  .cardinfo-box-title p {
    font-weight: bold;
    font-size: 1rem;
  }

  .cardinfo-box-title svg {
    height: 18px;
    width: 18px;
  }

  .cardinfo-box-labels {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .cardinfo-box-labels label {
    border-radius: 40px;
    background-color: gray;
    color: #fff;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .cardinfo-box-labels label svg {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  .cardinfo-box ul {
    display: flex;
    gap: 5px;
    margin-left: 20px;
  }
  .cardinfo-box ul li {
    list-style: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }

  .cardinfo-box ul .li-active {
    box-shadow: 0 0 0 3px yellow;
    border: 2px solid red;
    padding: 8px;
  }

  .cardinfo-box-progress-bar {
    width: 100%;
    border-radius: 30px;
    height: 10px;
    margin-bottom: 2%;
  }
  .notDisplay {
    display: none;
  }
  .cardinfo-box-progress {
    height: 100%;
    border-radius: 30px;
    background-color: skyblue;
    width: 0;
    transition: 200ms;
  }

  .cardinfo-box-task-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .cardinfo-box-task-checkbox {
    display: flex;
    gap: 5px;
  }

  .cardinfo-box-task-checkbox input,
  .cardinfo-box-task-checkbox svg {
    height: 18px;
    width: 18px;
    outline: none;
    cursor: pointer;
  }

  .cardinfo-box-task-checkbox p {
    flex: 1;
    line-height: 18px;
  }

  .cardinfo-box-task-checkbox .completed {
    text-decoration-line: line-through;
  }

  .cardinfo-box input[type="date"] {
    width: fit-content;
    border: 2px solid #ddd;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    padding: 5px;
  }
  .cardinfo-box-progress-bar progress,
  .cardinfo-box-progress-bar p {
    display: inline-block;
  }
`;
export default Wrapper;
