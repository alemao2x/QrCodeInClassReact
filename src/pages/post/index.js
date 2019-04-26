import React, { Component } from "react";
import posts from "../../services/posts";
import * as rB from "react-bootstrap";
import styled from "styled-components";

export default class Post extends Component {
  state = {
    post: {}
  };

  loadPost() {
    const { id } = this.props.match.params;
    const post = posts.filter(value => {
      // eslint-disable-next-line eqeqeq
      return value.id == id;
    });
    this.setState({ post: post[0] });
  }

  componentDidMount() {
    this.loadPost();
  }

  render() {
    const { Container } = rB;
    const { post } = this.state;
    return (
      <MainContainer>
        <Header imgId={post.imgId}>
          <div className="text-wrapper">
            <h1>{post.title}</h1>
            <p>{post.subject}</p>
          </div>
        </Header>
        <Container>
          <section>
            <h1>Section 1</h1>
            <div className="placeholder">
              <span>OPA</span>
            </div>
          </section>
        </Container>
      </MainContainer>
    );
  }
}

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
