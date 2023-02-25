import styled from "styled-components";

const Wrapper = styled.section`
  .team-member {
    border: none;
    display: flex;
    align-items: center;

    border-radius: 12px;
    border: 1px solid #ddd;
    overflow: hidden;

    margin: 3%;

    padding: 2%;
    background-color: #fff;
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
  .initial {
    width: 10%;
    height: auto;
    @media (max-width: 1600px) {
      display: none;
    }
    display: grid;
    place-items: center;
    background: #575fcf;
    border-radius: 50%;
    font-size: medium;
    margin: 3%;
    text-transform: uppercase;
    color: var(--white);
  }

  .team-member-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  .team-member-info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .team-member-info p {
    margin: 2px 0 0 0;
    font-size: 14px;
    color: #666;
  }
`;
export default Wrapper;
