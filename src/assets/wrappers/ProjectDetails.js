import styled from "styled-components";

//import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.section`
  .main {
    background-color: #f9f6ff;
    padding: 1%;
    border-radius: 1%;
  }
  .empty {
    height: 5%;
  }
  header {
    //padding: 1rem 1.5rem;
    margin-top: 1%;
    margin-bottom: 1%;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .react-trello-lane {
    border: 50;
    background-color: #bfc5fe;
  }
  .react-trello-board {
    @media (max-width: 1600px) {
      display: grid;
    }
  }
  .main-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
    margin-bottom: 1%;
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
  .project-name {
    text-align: center;
    color: #333;
    font-size: 2em;
    margin: 20px 0;
  }
  .progres {
    width: 80%; /* Set the width of the progress bar */
    margin: 2%; /* Center the progress bar */
  }

  .progres h4 {
    text-align: center; /* Center the text */
    margin-bottom: 10px; /* Add some space between the text and the progress bar */
  }

  .progres progress {
    width: 100%; /* Make the progress bar span the entire width of the parent element */
    appearance: none; /* Remove the default styling of the progress bar */
    background-color: #ddd; /* Set the background color */
    border-radius: 5px; /* Add some rounded corners */
    height: 15px; /* Set the height */
  }

  .progres progress::-webkit-progress-bar {
    background-color: #fff; /* Set the background color for Webkit-based browsers */
    border-radius: 10px;
    border: 1px solid #ddd;
  }

  .progres progress::-webkit-progress-value {
    background-color: #2ecc71; /* Set the progress color for Webkit-based browsers */
    border-radius: 10px; /* Add some rounded corners for Webkit-based browsers */
  }

  .progres progress::-moz-progress-bar {
    background-color: #4caf50; /* Set the progress color for Firefox */
  }
  .membres {
    margin-top: 3%;
    width: 20%;
    height: 100%;
    float: right;
    align-items: center;
    background-color: #9968f2;
    border-radius: 5px;
    border: none;

    padding: 1%;
  }
  .projet {
    margin: 0 10px;
  }
  .projet .details {
    width: 75%;
    float: left;
    margin-right: 10px;
  }
  .react-datepicker__input-container {
    display: inline-block;
  }

  .react-datepicker__input-container input {
    width: 100px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 2.5rem;
    line-height: 2.5rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
export default Wrapper;
