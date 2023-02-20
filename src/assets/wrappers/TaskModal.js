import styled from "styled-components";

const Wrapper = styled.section`
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .modal-body {
    background-color: #fdf9ff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
    width: 100%;
    max-width: 800px;
    position: relative;
    height: 100%;
    overflow-y: auto;
  }

  .modal-body h1 {
    margin-top: 0;
  }
  .back-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px; /* for example */
    color: #e74c3c;
    top: 10px;
    right: 20px;
    width: 100px;
    height: 100px;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: x-large;
  }

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
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form__label {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .form__input {
    width: 100%;
    height: 35px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .form__select-container {
    position: relative;
    width: 100%;
  }

  .form__select {
    width: 100%;
    height: 35px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    appearance: none;
    background-color: #fff;
    background-image: none;
    color: black;
    font-size: 14px;
    padding-left: 2%;
  }

  .form__select::placeholder {
    color: #999;
    font-size: 14px;
  }

  .form__select-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .form__datepicker-container {
    position: relative;
    width: 100%;
  }

  .form__datepicker-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .form__button {
    width: 120px;
    height: 35px;
    background-color: #0077ff;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .form__button:hover {
    background-color: #0066cc;
  }
`;
export default Wrapper;
