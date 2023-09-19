import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { MdLogout } from "react-icons/md";
import Modal from "./Modal";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import MyContext from "../utils/MyContext";
import { useRouter } from "next/router";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [menu, setMenu] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("tri2doId");
    setUser(null);
  };

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <Main>
      <Larger className="larger">
        <div className={`col`}>
          <Link href="/">
            <span className="heading ">TRI2DO</span>
          </Link>
          <Link href="/compiler">
            <span className="head">Compiler</span>
          </Link>
          <div
            className="menu"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>Sheets</span>
            {showDropdown ? (
              <>
                <ul className="dropdown">
                  <a href="/solve/0">
                    <li>Aman DSA</li>
                  </a>
                  <a href="/solve/1">
                    <li>Blind 75</li>
                  </a>
                  <a href="/solve/2">
                    <li>NeetCode 150</li>
                  </a>
                  <a href="/solve/3">
                    <li>Love Babbar</li>
                  </a>
                  <a href="/solve/4">
                    <li>Striver Sde</li>
                  </a>
                  <a href="/solve/5">
                    <li>Fraz 450</li>
                  </a>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col">
          <ThemeToggler />
          {user ? (
            <>
              <Link href="/profile" style={{ cursor: "pointer" }}>
                <img
                  src={
                    localStorage.getItem("avatar") ||
                    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
                  }
                  alt=""
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
              </Link>

              <MdLogout onClick={handleLogout} style={{ cursor: "pointer" }} />
            </>
          ) : (
            <span className="login" onClick={handleLogin}>
              Login
            </span>
          )}
        </div>
      </Larger>
      <Smaller className="smaller">
        <div className="icon">
          {menu ? (
            <>
              <TiThMenu onClick={handleClick} size={25} />
              <div className="login">
                {user ? (
                  <div className="profile">
                    <Link href="/profile" style={{ cursor: "pointer" }}>
                      <img
                        src={
                          localStorage.getItem("avatar") ||
                          "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
                        }
                        alt=""
                        style={{ width: "2rem", borderRadius: "50%" }}
                      />
                    </Link>
                    <MdLogout
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  <span onClick={handleLogin}>Login</span>
                )}
              </div>
              <ThemeToggler />
            </>
          ) : (
            <>
              <ImCross onClick={handleClick} size={25} />
              <div className="login">
                {user ? (
                  <div className="profile">
                    <Link href="/profile" style={{ cursor: "pointer" }}>
                      <img
                        src={
                          localStorage.getItem("avatar") ||
                          "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
                        }
                        alt=""
                        style={{ width: "2rem", borderRadius: "50%" }}
                      />
                    </Link>
                    <MdLogout
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  <span onClick={handleLogin} className="only-login">
                    Login
                  </span>
                )}
              </div>
              <ThemeToggler />
            </>
          )}
        </div>
        {!menu && (
          <div className="content">
            <ul className="dropdown">
              <Link href="/">
                <li className="heading ">Home</li>
              </Link>
              <Link href="/compiler">
                <li className="head">Compiler</li>
              </Link>
            </ul>
          </div>
        )}
      </Smaller>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Main>
  );
};

const Smaller = styled.div`
  width: 100%;
  background: var(--box);
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .icon {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    cursor: pointer;
    color: var(--text);
    align-items: center;
  }
  .content {
    padding: 10px 20px 10px 20px;
    color: var(--text);
    margin-top: 0.5rem;
    ul {
      li {
        text-align: center;
        background-color: #81cce6;
        border-radius: 10px;
        padding: 10px 5px;
        margin: 5px 0;
        :hover {
          background-color: #2cbcec;
        }
      }
      list-style: none;
    }
  }
  .login {
    /* padding: 10px 0; */
    span {
      padding: 10px 10px;
      /* margin: 5px 0; */
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
      background-color: #0bdf0b;
      :hover {
        background-color: #07ee07;
      }
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      /* background: transparent; */
    }
  }
`;

const Main = styled.div`
  width: 100vw;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  @media (max-width: 500px) {
    .larger {
      display: none;
    }
    .smaller {
      display: flex;
    }
  }
  @media (min-width: 500px) {
    .larger {
      display: flex;
    }
    .smaller {
      display: none;
    }
  }
`;

const Larger = styled.div`
  /* .larger{} */
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--box);
  color: var(--text);
  /* position: sticky; */
  top: 0;
  z-index: 8;
  .col {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 20px;
    .login {
      font-size: 18px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: #07ee07;
      :hover {
        background-color: #0bdf0b;
      }
    }
    .heading {
      color: var(--blue);
      font-size: 24px;
      font-weight: bold;
    }
    .menu {
      .dropdown {
        position: absolute;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        background: var(--box);
        font-size: 14px;
        z-index: 10000;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        li {
          padding: 0.75rem;
          cursor: pointer;
          &:hover {
            background: var(--grey);
            transition: 0.3s ease-in-out;
          }
        }
      }
    }
  }
`;

export default Navbar;
