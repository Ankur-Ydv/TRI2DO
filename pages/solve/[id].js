import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import MainLayout from "../../layouts/MainLayout";
import { FaRandom, FaStar, FaListAlt } from "react-icons/fa";
import ProblemBox from "../../components/ProblemBox";
import Bar from "../../components/Bar";
import MyContext from "../../utils/MyContext";
import { Sheets } from "../../data/SheetList";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

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
  const router = useRouter();
  const { user, setUser } = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [solvedNumber, setSolvedNumber] = useState(0);
  const [showBookmark, setShowBookmark] = useState(false);
  const [loading, setLoading] = useState(user !== null);
  const [problems, setProblems] = useState(sheet.problems);

  // useEffect(() => {
  //   router.replace(router.asPath);
  // }, [router.asPath]);

  useEffect(() => {
    if (user) {
      const setData = async () => {
        const res = await axios.get(`/api/user/${user}`);
        const solvedProblems = res.data.response[`sheet${sheetId}`].solved;
        const bookmarkedProblems =
          res.data.response[`sheet${sheetId}`].bookmarked;

        solvedProblems.forEach((id) => {
          sheet.problems[id - 1].isSolved = true;
        });
        setSolvedNumber(solvedProblems.length);

        bookmarkedProblems.forEach((id) => {
          sheet.problems[id - 1].isBookmarked = true;
        });
        setLoading(false);
      };

      setData();
    }
  }, [router.asPath]);

  useEffect(() => {
    if (showBookmark) {
      setProblems(sheet.problems.filter((item) => item.isBookmarked));
    } else {
      setProblems(sheet.problems);
    }
  }, [showBookmark]);

  const handleBookmark = async (id) => {
    try {
      if (user) {
        const res = await axios.put(`/api/user/${user}`, {
          sheetId,
          problem: id,
          arrayType: "bookmarked",
          isAddRequest: !sheet.problems[id - 1].isBookmarked,
        });
        if (res.status === 200)
          sheet.problems[id - 1].isBookmarked =
            !sheet.problems[id - 1].isBookmarked;
        toast.success("Bookmarked Successfully!!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: localStorage.getItem("theme").slice(0, -6),
        });
      } else {
        toast.warning("Please Login To Track!!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: localStorage.getItem("theme").slice(0, -6),
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("theme").slice(0, -6),
      });
    }
  };

  const handleCheck = async (id) => {
    try {
      if (user) {
        const res = await axios.put(`/api/user/${user}`, {
          sheetId,
          problem: id,
          arrayType: "solved",
          isAddRequest: !sheet.problems[id - 1].isSolved,
        });
        if (res.status === 200) {
          sheet.problems[id - 1].isSolved = !sheet.problems[id - 1].isSolved;
          if (sheet.problems[id - 1].isSolved)
            setSolvedNumber(solvedNumber + 1);
          else setSolvedNumber(solvedNumber - 1);
          toast.success("Checked Successfully!!", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem("theme").slice(0, -6),
          });
        }
      } else {
        toast.warning("Please Login To Track!!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: localStorage.getItem("theme").slice(0, -6),
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("theme").slice(0, -6),
      });
      // alert(error);
    }
  };

  const handleRandom = () => {
    const num = Math.ceil(Math.random() * 1000) % sheet.problems.length;
    window.open(sheet.problems[num].link, "_blank");
  };

  const filteredProblems = problems.filter(
    (item) =>
      item.topic.toLowerCase().includes(topic.toLowerCase()) &&
      item.problem.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <Container>
        {loading ? (
          <div className="loading">
            <span>Please Wait...</span>
          </div>
        ) : (
          <>
            <div className="search">
              <FaRandom onClick={handleRandom} style={{ cursor: "pointer" }} />
              <input
                className="bar"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              {showBookmark ? (
                <FaStar
                  style={{ cursor: "pointer", color: "#fcb001" }}
                  onClick={() => setShowBookmark(!showBookmark)}
                />
              ) : (
                <FaStar
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowBookmark(!showBookmark)}
                />
              )}
              <span style={{ cursor: "pointer" }} onClick={(e) => setTopic("")}>
                ALL
              </span>
            </div>

            <QuestionBox>
              <div className="row1">
                <span style={{ textAlign: "center" }}>{sheet.name}</span>
                <div className="bar">
                  <Bar
                    totalQuestions={sheet.length}
                    solvedQuestions={solvedNumber}
                  />
                </div>
              </div>

              <div className="row2">
                <div className="topics">
                  {sheet.topics.map((topic, index) => {
                    return (
                      <span
                        key={index}
                        onClick={(e) => setTopic(e.target.textContent)}
                      >
                        {topic}
                      </span>
                    );
                  })}
                </div>
                <div className="list">
                  {filteredProblems.map((item) => {
                    return (
                      <ProblemBox
                        key={item.id}
                        userId={user}
                        sheetId={sheetId}
                        problem={item}
                        handleBookmark={handleBookmark}
                        handleCheck={handleCheck}
                      />
                    );
                  })}
                </div>
              </div>
            </QuestionBox>
          </>
        )}
      </Container>
      <ToastContainer />
    </MainLayout>
  );
};

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 0 2rem 0;
  .loading {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    background: var(--box);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;
    color: var(--fourth);
    .bar {
      padding: 0.75rem;
      width: 80%;
    }
    input {
      margin: 0 10px;
      outline: none;
      background: var(--bgcolor);
      color: var(--text);
      border: none;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3) inset;
    }
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const QuestionBox = styled.div`
  background: var(--box);
  color: var(--fourth);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;
  .row1 {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 0.5rem;
  }

  .row2 {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: fit-content(0);
    border-top: 1px solid var(--text);
    .topics {
      height: fit-content;
      display: flex;
      flex-direction: column;
      span {
        padding: 1rem;
        :hover {
          background-color: var(--grey);
          cursor: pointer;
          transition: 0.4s ease-in-out;
        }
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      background: rgb(247 248 250/1);
      color: black;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    .row1 {
      display: none;
    }
  }
`;

export default Solve;
