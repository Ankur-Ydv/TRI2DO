import styled from "@emotion/styled";

const OutputDetails = ({ outputDetails }) => {
  return (
    <Container>
      <Para>
        Status:{" "}
        <span className={outputDetails?.status?.id == 3 ? "sucess" : "error"}>
          {outputDetails?.status?.description}
        </span>
      </Para>
      <Para>
        Memory:{" "}
        <span className={outputDetails?.status?.id == 3 ? "sucess" : "error"}>
          {outputDetails?.memory}
        </span>
      </Para>
      <Para>
        Time:{" "}
        <span className={outputDetails?.status?.id == 3 ? "sucess" : "error"}>
          {outputDetails?.time}
        </span>
      </Para>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text);
  width: 100%;
`;
const Para = styled.div`
  padding: 2px 0;
  .sucess {
    color: green;
  }
  .error {
    color: red;
  }
`;
export default OutputDetails;
