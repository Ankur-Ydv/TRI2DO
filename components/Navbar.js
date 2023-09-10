import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
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
                  <Link href="/solve/0">
                    <li>Aman DSA</li>
                  </Link>
                  <Link href="/solve/1">
                    <li>Blind 75</li>
                  </Link>
                  <Link href="/solve/2">
                    <li>NeetCode 150</li>
                  </Link>
                  <Link href="/solve/3">
                    <li>Love Babbar</li>
                  </Link>
                  <Link href="/solve/4">
                    <li>Striver Sde</li>
                  </Link>
                  <Link href="/solve/5">
                    <li>Fraz 450</li>
                  </Link>
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
                {/* <FaUserCircle style={{ fontSize: '25px' }} /> */}
                <img
                  src={localStorage.getItem("avatar")}
                  alt=""
                  style={{ width: "2rem", borderRadius: "50%" }}
                />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--box);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  color: var(--text);
  position: sticky;
  top: 0;
  z-index: 8;
  .col {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 20px;
    .heading {
      color: var(--blue);
      font-size: 24px;
      font-weight: bold;
    }
    .menu {
      position: relative;
      width: 15rem;
      .dropdown {
        position: absolute;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        background: var(--box);
        font-size: 14px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        a {
          padding: 0.75rem;
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
