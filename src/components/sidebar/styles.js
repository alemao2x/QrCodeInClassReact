import styled from "styled-components";

const Bar = styled.div`
  position: sticky;
  top: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #a82f3b;
  border-radius: 0.5rem;
  img {
    margin: 10px auto;
    width: 80px;
    height: 80px;
  }
  small {
    color: white;
  }
  div {
    font-size: 17px;
    border: 2px solid #a82f3b;
    background: #fff;
    margin-top: 20px;
    border-radius: 0.5rem;
    padding: 10px 15px;
  }
`;

export { Bar }