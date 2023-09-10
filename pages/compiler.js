import styled from "@emotion/styled";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import CompilerLanding from "../components/CompilerLanding";

const compiler = () => {
  return (
    <MainLayout>
      <Container>
        <CompilerLanding />
      </Container>
    </MainLayout>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export default compiler;
