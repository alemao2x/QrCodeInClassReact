import styled from "styled-components";

const Post = styled.article`
  margin: 20px auto;
  display: flex;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #dedede;
  font-size: 15px;
  transition: all 0.3s;
  @media (max-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 576px) {
    font-size: 9px;
    flex-direction: column;
    img {
      margin: auto;
    }
  }
  h1 {
    font-weight: lighter;
    font-size: 2.5em;
  }
  small {
    margin-top: 70px;
    font-size: 1.1em;
  }
  p {
    font-size: 1.4em;
  }
  &:hover {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  .img-wrapper {
    overflow: hidden;
    border-radius: 0.5rem;
    width: fit-content;
    margin: auto;
  }
`;

export { Post };