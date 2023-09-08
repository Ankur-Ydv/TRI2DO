import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaBookmark, FaRegBookmark } from "react-icons/fa";
import axios from "axios";

const ProblemBox = ({
  userId,
  sheetId,
  problem,
  solvedItems,
  setSolvedItems,
  bookmarkedItems,
  setBookmarkedItems,
  barHandle,
}) => {
  const handleBmk = async () => {
    const res = await axios.put(`/api/user/${userId}`, {
      sheetId,
      problem: problem.cqid,
      arrayType: "bookmarked",
      isAddRequest: bookmarkedItems.has(problem.qid),
    });
    if (res.status === 200) {
      if (bookmarkedItems.has(problem.qid)) bookmarkedItems.delete(problem.qid);
      else setBookmarkedItems([...bookmarkedItems, problem.qid]);
    }
  };

  const handleToggle = async () => {
    const res = await axios.put(`/api/user/${userId}`, {
      sheetId,
      problem: problem.qid,
      arrayType: "solved",
      isAddRequest: solvedItems.has(problem.qid),
    });
    if (res.status === 200) {
      if (solvedItems.has(problem.qid)) solvedItems.delete(problem.qid);
      else setBookmarkedItems([...solvedItems, problem.qid]);
    }
  };

  return (
    <>
      <Container>
        <span className="check">
          <input type="checkbox" />
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
          onClick={handleBmk}
        >
          {bookmarkedItems.has(problem.qid) ? (
            <FaBookmark />
          ) : (
            <FaRegBookmark />
          )}
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
  border: 1px solid;
  span {
    padding: 1rem;
  }
  .problem {
    width: 80%;
  }
`;

export default ProblemBox;
