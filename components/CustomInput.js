import styled from "@emotion/styled";
import React from "react";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <Container>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>INPUT</span>
      <textarea
        rows="9"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
      ></textarea>
    </Container>
  );
};

const Container = styled.div`
  color: var(--text);
  textarea {
    width: 100%;
    background: var(--bgcolor);
    color: var(--text);
    padding: 1rem;
    margin-top: 1rem;
    border-style: none;
    outline: none;
    resize: none;
    box-shadow: inset 0 0 10px grey;
    overflow-y: auto;
  }
`;

export default CustomInput;
