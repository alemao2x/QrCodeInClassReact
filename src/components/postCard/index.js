import React, { Component } from "react";
import posts from "../../services/posts";
import styled from "styled-components";
import * as rB from "react-bootstrap";
import { Link } from "react-router-dom";

export default class PostsCard extends Component {
  state = {
    posts: [],
    imgs: []
  };
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    this.setState({ posts: posts });
  };

  render() {
    const { Col, Image } = rB;
    const { posts } = this.state;
    return posts.map(post => (
      <Link to={`/post/${post.id}`}>
        <Post className="py-2 shadow" key={post._id}>
          <Col>
            <div className="img-wrapper">
              <Image
                src={`https://picsum.photos/250/150?image=${post.imgId}`}
                alt="banner"
                fluid
              />
            </div>
          </Col>
          <Col className="col-md-8">
            <h1>{post.title}</h1>
            <small className="text-muted">
              {post.author} | {post.subject}
            </small>
            <p>{post.desc}</p>
          </Col>
        </Post>
      </Link>
    ));
  }
}

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
