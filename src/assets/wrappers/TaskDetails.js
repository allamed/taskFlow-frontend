import styled from 'styled-components';

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
  progress::before {
    content: attr(value) '%'; /* Display the value of the 'value' attribute as a percentage */
    position: absolute; /* Position the text */
    //top: 65%; /* Vertically center the text */
    left: 48%; /* Horizontally center the text */
    transform: translate(
      -50%,
      -50%
    ); /* Center the text within the progress bar */
    font-size: 12px; /* Set the font size */
    font-weight: bold; /* Make the text bold */
    color: green; /* Set the text color */
  }
  progress {
    /* Style the container */
    width: 100%; /* Set the width of the progress bar */
    height: 10px; /* Set the height of the progress bar */
    background-color: #ddd; /* Set the background color of the container */
    border-radius: 5px; /* Add rounded corners to the container */

    /* Style the progress bar */
    &::-webkit-progress-bar {
      background-color: #eee; /* Set the background color of the progress bar */
      border-radius: 5px; /* Add rounded corners to the progress bar */
    }

    &::-webkit-progress-value {
      background-color: #4caf50; /* Set the progress bar color */
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
`;
export default Wrapper;
