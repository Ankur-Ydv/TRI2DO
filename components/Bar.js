import styled from "@emotion/styled";
import React from "react";

const Bar = ({ totalQuestions, solvedQuestions }) => {
  const width = (solvedQuestions / totalQuestions) * 100;
  return (
    <>
      <Container width={width}>
        <div className="progress-bar">
          <div className="progress-value"></div>
        </div>
        <div className="count">{`${solvedQuestions}/${totalQuestions}`}</div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  .progress-bar {
    background: var(--lightBlue);
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    padding: 5px;
    display: flex;
    width: 100%;
    .progress-value {
      border-radius: 100px;
      background: var(--darkBlue);
      height: 5px;
      width: ${({ width }) => width}%;
      transition: 0.5s ease-out;
    }
  }
`;

export default Bar;
