import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaBookmark, FaRegBookmark } from "react-icons/fa";

const ProblemBox = ({ problem, handleBookmark, handleCheck }) => {
  const router = useRouter();
  const [isBmk, setIsBmk] = useState(problem.isBookmarked);
  const [isCheck, setIsCheck] = useState(problem.isSolved);

  return (
    <>
      <Container style={{ background: isCheck ? "#e5f6df" : "none" }}>
        <span className="check">
          <input
            type="checkbox"
            checked={isCheck}
            onChange={() => {
              setIsCheck(!isCheck);
              handleCheck(problem.id);
            }}
          />
        </span>
        <span className="problem">{problem.problem}</span>
        <span className="link">
          <Link href={`${problem.link}`}>
            <FaExternalLinkAlt />
          </Link>
        </span>
        <span
          className="bookmark"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsBmk(!isBmk);
            handleBookmark(problem.id);
          }}
        >
          {isBmk ? <FaBookmark /> : <FaRegBookmark />}
        </span>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  border-top: none;
  span {
    padding: 1rem;
  }
  .problem {
    width: 80%;
  }
  @media (max-width: 500px) {
    .check,
    .bookmark {
      display: none;
    }
  }
`;

export default ProblemBox;
