import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Modal from "./Modal";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { MyContext } from "../utils/myContext";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, setUser } = useContext(MyContext);

  const openModal = () => {
    setShowModal((showModal) => !showModal);
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
                  <Link href="/solve/1">
                    <li>Aman DSA</li>
                  </Link>
                  <Link href="/solve/2">
                    <li>Blind 75</li>
                  </Link>
                  <Link href="/solve/3">
                    <li>NeetCode 150</li>
                  </Link>
                  <Link href="/solve/4">
                    <li>Love Babbar</li>
                  </Link>
                  <Link href="/solve/5">
                    <li>Striver Sde</li>
                  </Link>
                  <Link href="/solve/6">
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
                <FaUserCircle />
              </Link>

              <MdLogout
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("tri2doId");
                }}
                style={{ cursor: "pointer" }}
              />
            </>
          ) : (
            <span onClick={openModal}>Login</span>
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
    font-size: 22px;
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
