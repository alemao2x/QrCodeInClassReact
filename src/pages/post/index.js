import React, { Component } from "react"
import posts from "../../services/posts"
import * as rB from "react-bootstrap"
import { MainContainer, Header } from "./styles"

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
    window.scrollTo(0, 0);
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
              <span></span>
            </div>
          </section>
        </Container>
      </MainContainer>
    );
  }
}

