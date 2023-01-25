import styled from "@emotion/styled";
import React from "react";
import CheckBox from "./CheckBox";

const Question = ({ name, link, qid, sheetId, solved, barHandle }) => {
  return (
    <>
      <Container>
        <div className="left">
          <CheckBox
            qid={qid}
            sheetId={sheetId}
            solved={solved}
            barHandle={barHandle}
          />
          <div className="name">{name}</div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <button type="submit">SOLVE</button>
        </a>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  ${'' /* background-color: var(--bgcolor); */}
  color: var(--text);
  border-radius: 5px;
  .left {
    display: flex;
    gap: 2rem;

    .name {
      font-size: 18px;
    }
  }

  button {
    padding: 1rem;
    width: 10rem;
    ${'' /* background: transparent; */}
    background-color:  var(--green);
    ${'' /* border: 2px solid var(--text); */}
    font-weight:bold;
    border-radius: 8px ;
    color: white;
    transition: 0.5s ease-in-out;
    &:hover {
      ${'' /* background-color:  var(--green); */}
      ${'' /* background-color: var(--hover); */}
      ${'' /* border: 2px solid var(--third); */}
      cursor: pointer;
    }
  }
  &:hover {
  }
`;

export default Question;
