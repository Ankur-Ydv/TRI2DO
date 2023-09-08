import React from "react";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainLayout;
