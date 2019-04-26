import React from "react";
import styled from "styled-components";
import * as rB from "react-bootstrap";
import PostsCard from "./../../components/postCard";
import Sidebar from "../../components/sidebar";

const Main = () => {
  const { Container, Col, Row } = rB;
  return (
    <MainContainer className="py-4">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Last Posts:</h1>
            <PostsCard />
          </Col>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 3, offset: 0 }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.section`
  background: #f8f8f8;
`;
