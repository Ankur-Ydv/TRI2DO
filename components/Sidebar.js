import styled from "@emotion/styled";
import React from "react";

const Sidebar = ({ topics, name, handleClick }) => {
  let key1 = 1;

  const handleState = (e) => {
    handleClick(e.target.textContent);
  };

  return (
    <>
      <Container>
        <div className="col category">
          <div className="head">TOPIC</div>
          {topics.map((topic) => {
            return (
              <span
                key={key1++}
                onClick={(e) => {
                  handleState(e);
                }}
              >
                {topic}
              </span>
            );
          })}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 100%;
  ${'' /* background: var(--bgcolor); */}
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  .col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0.5rem;
    color: var(--white);
    border-bottom: 2px solid var(--fourth);
    ${'' /* border-top: 2px solid var(--fourth); */}
    .head {
      ${'' /* padding: 1rem;
      font-size: 20px;
      color: var(--third); */}
      padding: 10px;
      font-size: 20px;
      margin-bottom: 10px;
      color: var(--text);
    }
    span {
      width: 100%;
      padding: 1rem 2rem;
      color: var(--text);
      transition: 0.5s ease-in-out;
      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--lightBlue);
      }
    }
  }
  @media screen and (max-widht: 820px) {
  }
`;

export default Sidebar;
