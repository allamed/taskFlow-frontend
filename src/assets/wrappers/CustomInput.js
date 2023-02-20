import styled from 'styled-components'

const Wrapper = styled.section`
  .custom-input {
  width: 100%;
}

.custom-input-display {
  padding: 6px 12px;
  border-radius: 3px;
  background-color: #F4EDF6;
  color: #000;
  cursor: pointer;
  width: fit-content;
  
}

.custom-input-display:hover {
  background-color: #E8CDFD;
}

.custom-input-edit {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.custom-input-edit input {
  border: 2px solid var(--primary-300);
  border-radius: 5px;
  outline: none;
  
  font-size: 1rem;
  padding: 10px;
}

.custom-input-edit-footer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.custom-input-edit-footer button {
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  background-color: var(--primary-500);
  color: #fff;
  border: none;
  transition: 100ms ease;
  padding: 10px;
}
.custom-input-edit-footer button:hover {
  background-color: var(--primary-400);
}

.custom-input-edit-footer button:active {
  transform: translateY(2px);
}

.custom-input-edit-footer .closeIcon {
  cursor: pointer;
  height: 24px;
  width: 24px;
}
`
export default Wrapper