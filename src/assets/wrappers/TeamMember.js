import styled from 'styled-components';

const Wrapper = styled.section`
  .team-member {
    display: flex;
    align-items: center;
    margin: 16px 0;
    border-radius: 8px;
    border: 1px solid #ddd;
    overflow: hidden;
    margin: 16px;
    padding: 8px;
    background-color: #fff;
  }

  .team-member img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .team-member-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .team-member-info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .team-member-info p {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #666;
  }
`;
export default Wrapper;
