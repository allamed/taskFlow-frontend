import styled from 'styled-components';

const Wrapper = styled.div`
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
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 40%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .modal-body {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
    width: 80%;
    max-width: 500px;
  }

  .modal-body h1 {
    margin-top: 0;
  }
  .back-button {
    display: flex;
    align-items: right;
    justify-content: flex-start;
    //position: absolute;
    top: 10px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }

  .back-button AiOutlineClose {
    font-size: 150px;
    color: #666;
  }
`;
export default Wrapper;
