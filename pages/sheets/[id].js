import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Question from "../../components/Question";
import Sidebar from "../../components/Sidebar";
import Bar from "../../components/Bar";
import { TbLoader } from "react-icons/tb";
import ThemeToggler from "../../components/ThemeToggler";
import axios from 'axios'

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.BASE_URL}/api/sheetlist`);
  const sheets = response.data;

  const paths = sheets.map((sheet) => ({
    params: {
      id: sheet.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `${process.env.BASE_URL}/api/sheets/${params.id}`
  );
  // const vari=response.data;
  // console.log(vari.problems)
  const sheet = response.data;

  return {
    props: {
      sheet,
      sheetId: params.id,
    },
  };
}

const Sheet = ({ sheet, sheetId }) => {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [data, setData] = useState(false);
  const [solvedNumber, setSolvedNumber] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`tri2do-${sheetId}`)) || [];
    if (items) {
      items.forEach((item) => {
        sheet.problems[Number(item) - 1].solved = true;
      });
      setData(true);
      setSolvedNumber(items.length);
    }
  }, [topic]);
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (data) => {
    setTopic(data);
  };

  const removeTopic = () => {
    setTopic("");
  };
  
  const barHandle = (data) => {
    if (data) {
      setSolvedNumber(solvedNumber - 1);
    } else {
      setSolvedNumber(solvedNumber + 1);
    }
  };

  const questions = sheet.problems.filter((item) =>
    item.topic.toLowerCase().includes(topic.toLowerCase())
  );

  const filteredQuestions = questions.filter((item) =>
    item.problem.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container>
        {!data ? (
          <>
            <TbLoader className="loader" />
            <span>Please Wait</span>
          </>
        ) : (
          <>
            {/* <Navbar>
              <div className="logo">
                <Link href="/">
                  <span>TRI2DO</span>
                </Link>
              </div>
              <input
                type="text"
                placeholder="Search Problem"
                onChange={handleChange}
              />
            </Navbar> */}
            <Navbar>
              <div style={{display:"flex", marginTop:'10px'}}>
                <Link href="/">
                  <span >TRI2DO</span>
                </Link>
              <div style={{marginTop: "8px" ,marginLeft: '102px'}}> <ThemeToggler/> </div>
              <div className="divider"></div>
              </div>
              <input
                type="text"
                placeholder="Search Problem"
                onChange={handleChange}
              />
            </Navbar>
            <Content>
              <Sidebar
                topics={sheet.topics}
                name={sheet.name}
                handleClick={handleClick}
              />
              <div style={{width:"100%"}}>
                <Bar
                  topic={topic}
                  totalQuestions={sheet.length}
                  solvedQuestions={solvedNumber}
                  sheetname={sheet.name}
                  removeTopic={removeTopic}
                />
              <Contain>
                {filteredQuestions.map((item) => {
                  return (
                    <Question
                      sheetId={sheetId}
                      name={item.problem}
                      link={item.link}
                      key={item.id}
                      solved={item.solved}
                      qid={item.id}
                      barHandle={barHandle}
                    />
                  );
                })}
              </Contain></div>
            </Content>
          </>
        )}
      </Container>
    </>
  );
};

const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${'' /* padding: 1rem 2rem; */}
  overflow-y: scroll;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${'' /* background-color: var(--grey); */}
`;

const Navbar = styled.div`
  padding: 0.5rem 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: var(--blue);
  ${'' /* background-color: var(--bgcolor);
  color: var(--primary); */}
  span {
    font-size: 32px;
    font-family: "Bree Serif", sans-serif;
    &:hover {
      ${'' /* color:  var(--midBlue); */}
    }
  }
  .divider{
    width: 30vh;
    margin-top: 31px;
    border-bottom: 2px solid var(--text);
    position: relative;
    left: -255px;
    top: 8px;
  }

  input {
    padding: 0.5rem;
    width: 30%;
    ${'' /* background: transparent; */}
    border: none;
    border-bottom: 2px solid var(--blue);
    border-right: 2px solid var(--blue);
    color: var(--inputText);
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .loader {
    color: var(--text);
    font-size: 4rem;
    margin: 1rem;
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Sheet;
