import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import MainLayout from "../../layouts/MainLayout";
import { FaRandom, FaStar } from "react-icons/fa";
import ProblemBox from "../../components/ProblemBox";
import Bar from "../../components/Bar";
import { MyContext } from "../../utils/myContext";
import { Sheets } from "../../data/SheetList";

export async function getStaticPaths() {
  const paths = Sheets.map((sheet) => ({
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
  const sheet = Sheets[params.id];

  return {
    props: {
      sheet,
      sheetId: params.id,
    },
  };
}

const Solve = ({ sheet, sheetId }) => {
  const { user, setUser } = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [solvedNumber, setSolvedNumber] = useState(0);
  const [showBookmark, setShowBookmark] = useState(false);
  const [solvedItems, setSolvedItems] = useState(new Set());
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  useEffect(() => {
    if (user) {
      const setData = async () => {
        const res = await axios.get(`/api/user/${user}`);

        setSolvedItems(new Set(res.data.response[`sheet${sheetId}`].solved));
        setBookmarkedItems(
          new Set([...res.data.response[`sheet${sheetId}`].bookmarked])
        );
      };

      setData();
    }
  }, []);

  const barHandle = (data) => {
    if (data) {
      setSolvedNumber(solvedNumber - 1);
    } else {
      setSolvedNumber(solvedNumber + 1);
    }
  };

  let questions = sheet.problems.filter((item) =>
    item.topic.toLowerCase().includes(topic.toLowerCase())
  );

  if (showBookmark)
    questions = questions.filter((item) => item.isBookmarked === true);

  const filteredQuestions = questions.filter((item) =>
    item.problem.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <Container>
        <div className="search">
          <span>
            <FaRandom />
          </span>
          <input
            className="bar"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaStar />
        </div>

        <div className="box">
          <div className="topics">
            <span style={{ textAlign: "center" }} onClick={(e) => setTopic("")}>
              {sheet.name}
            </span>
            {sheet.topics.map((topic) => {
              return (
                <span onClick={(e) => setTopic(e.target.textContent)}>
                  {topic}
                </span>
              );
            })}
          </div>
          <div className="right">
            <div className="bar">
              <Bar
                totalQuestions={sheet.length}
                solvedQuestions={solvedNumber}
              />
            </div>
            <div className="list">
              {filteredQuestions.map((item) => {
                return (
                  <ProblemBox
                    userId={user}
                    sheetId={sheetId}
                    problem={item}
                    solvedItems={solvedItems}
                    bookmarkedItems={bookmarkedItems}
                    setBookmarkedItems={setBookmarkedItems}
                    setSolvedItems={setSolvedItems}
                    barHandle={barHandle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 0 2rem 0;
  .search {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid;
    .bar {
      padding: 0.75rem;
      width: 80%;
    }
  }

  .box {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: fit-content(0);
    .topics {
      height: fit-content;
      display: flex;
      flex-direction: column;
      border: 1px solid;
      span {
        padding: 1rem;
        :hover {
          background-color: aliceblue;
          cursor: pointer;
        }
      }
    }
    .right {
      overflow-y: auto;
      border: 1px solid;
      display: flex;
      flex-direction: column;
      .bar {
        display: flex;
        position: sticky;
        top: 0;
        background: var(--box);
        height: 3rem;
        border: 1px solid;
      }
      .list {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default Solve;
