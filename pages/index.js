import styled from "@emotion/styled";
import React from "react";
import Footer from "../components/Footer";
import SheetBox from "../components/SheetBox";
import ThemeToggler from "../components/ThemeToggler";
import SheetList from "../data/SheetList";
import axios from 'axios'

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `${process.env.BASE_URL}/api/sheetlist`
  );
  const sheets = response.data;

  return {
    props: {
      sheets,
    },
  };
}

const index = ({sheets}) => {
  return (
    <>
      <Header>
        <div className="tri2do">TRI2DO</div>
        <div><ThemeToggler/></div>
      </Header>
      <Container>
        {sheets.map((sheet) => {
          return <SheetBox sheet={sheet} key={sheet.id} />;
        })}
      </Container>
      <Footer />
    </>
  );
};

const Header = styled.div`
  background: var(--box);
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items:center;
  position: absolute;
  padding: 0.5rem 2rem;
  top: 2rem;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 0.8;
  .tri2do {
    font-family: "Bree Serif", sans-serif;
    text-align: center;
    font-size: 36px;
    color: var(--blue);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10rem 2rem 5rem 2rem;
  gap: 6rem;

  @media screen and (max-width: 520px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export default index;
