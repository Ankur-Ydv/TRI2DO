import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Modal from "./Modal";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { MyContext } from "../utils/myContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const router = useRouter();

  const handleLogin = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("tri2doId");
    setUser(null);
  };

  return (
    <>
      <Container>
        <div className="col">
          <Link href="/">
            <span className="heading">Tri2Do</span>
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
                <FaUserCircle style={{ fontSize: "25px" }} />
              </Link>

              <MdLogout onClick={handleLogout} style={{ cursor: "pointer" }} />
            </>
          ) : (
            <span onClick={handleLogin}>Login</span>
          )}
        </div>
      </Container>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid;
  .col {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 21px;
    .menu {
      position: relative;
      width: 13rem;
      .dropdown {
        position: absolute;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        z-index: 10;
        background: var(--box);
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        a {
          padding: 0.75rem;
          &:hover {
            background: aliceblue;
          }
        }
      }
    }
  }
`;

export default Navbar;
