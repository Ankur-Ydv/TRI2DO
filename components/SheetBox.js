import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const SheetBox = ({ sheet }) => {
  return (
    <>
      <Container>
        <span className="author">{sheet.name}</span>
        <img src={sheet.img} alt="dsa" />
        <p>Number Of Problems : {sheet.length}</p>
        <Link href={`/solve/${sheet.id}`}>
          <button>SOLVE</button>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem;
  color: var(--fourth);
  background: var(--box);
  .author {
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    color: var(--fourth);
    font-family: "Titillium Web", sans-serif;
  }
  img {
    width: 250px;
    height: 150px;
    object-fit: fill;
  }
  p {
    font-family: "Josefin Sans", sans-serif;
    text-align: justify;
  }
  a {
    width: 100%;
    display: flex;
    align-items: end;
    flex-direction: column;
    button {
      padding: 1rem 2rem;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      background-color: #0bdf0b;
      cursor: pointer;
      /* transition: 0.5s ease-in-out; */
      :hover{
        background-color: #07ee07;
      }
    }
  }
`;

export default SheetBox;
