import React, { Component } from "react";
import posts from "../../services/posts";
import * as rB from "react-bootstrap";
import { Link } from "react-router-dom";
import { Post } from "./styles"

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

