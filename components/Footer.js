import styled from "@emotion/styled";
import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="author a1">
          <span>Devendra Bedwal</span>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/davendra-bedwal-09608b232/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin />
            </a>
            <a
              href="https://leetcode.com/davendra009/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/devendra0009"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub />
            </a>
          </div>
        </div>
        <div className="author a2">
          <span>Ankur Yadav</span>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/ankur-yadav-aky/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin />
            </a>
            <a
              href="https://leetcode.com/Akryadav/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/Ankur-Ydv"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 1rem;
  padding: 2rem 0;
  display: flex;
  font-size: 100%;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: var(--primary);
  border-top: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  .author {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    span {
      /* font-size: 20px; */
      color: var(--primary);
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      a {
        /* font-size: 20px; */
        &:hover {
          color: var(--third);
        }
      }
    }
  }
  .a2 {
    border-left: 2px solid var(--primary);
  }
`;

export default Footer;
