import styled from "@emotion/styled";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <Container>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>OUTPUT</span>
      <OutputText>{outputDetails ? <>{getOutput()}</> : null}</OutputText>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: var(--text);
`;

const OutputText = styled.div`
  margin-top: 1rem;
  background: var(--bgcolor);
  color: var(--text);
  padding: 1rem;
  border-style: none;
  outline: none;
  resize: none;
  box-shadow: inset 0 0 10px grey;
  padding: 1rem;
  width: 100%;
  height: 180px;
  overflow-y: auto;
  word-wrap: break-word;
`;
export default OutputWindow;
