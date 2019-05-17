import styled from "styled-components"

const MainContainer = styled.section`
  background: #f8f8f8;
  section {
    text-align: center;
    .placeholder {
      height: 100vh;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  min-height: 80vh;
  background: linear-gradient(rgba(40, 43, 52, 0.5), rgba(40, 43, 52, 0.5)), url(
    "https://picsum.photos/1600/900?image=${props => props.imgId}&blur=5") fixed
      center;
  background-size: cover;
  display: flex;
  .text-wrapper{
    color: #fff;
    margin: auto;
    h1{
      font-weight: lighter;
    }
  }
`;

export { MainContainer, Header }