import styled from "@emotion/styled";
import React from "react";
import SheetBox from "../components/SheetBox";
import SheetList from "../data/SheetList";
import MainLayout from "../layouts/MainLayout";

const index = ({ sheets }) => {
  return (
    <>
      <MainLayout>
        <Container>
          {SheetList.map((sheet) => {
            return <SheetBox sheet={sheet} key={sheet.id} />;
          })}
        </Container>
      </MainLayout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 2rem 4rem 2rem;
  gap: 6rem;

  @media screen and (max-width: 520px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export default index;
