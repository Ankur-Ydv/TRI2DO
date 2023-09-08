import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <>
      <Container>
        <div className="title">
          <div className="number">4</div>
          <div className="moon">
            <div className="face">
              <div className="mouth"></div>
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
        <div className="subtitle">OOPS! Looks like you took a wrong turn.</div>
        <Link href={"/"}>
          <button>Back to Home Page</button>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("https://mcdn.wallpapersafari.com/medium/68/82/PvDEwd.jpg");
  color: white;
  .title > * {
    display: inline-block;
    font-size: 200px;
  }
  .number {
    text-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 0 0.2em;
    font-family: "Russo One", sans-serif;
  }

  .subtitle {
    font-size: 25px;
    margin-top: 1.5em;
    font-family: "Lato", sans-serif;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 22px;
    margin-top: 1.5em;
    padding: 0.5em 1em;
    letter-spacing: 1px;
    font-family: "Lato", sans-serif;
    color: white;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    z-index: 999;
    border: 2px solid white;
    border-radius: 5px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    transition: opacity 0.2s ease;
  }
  button:hover {
    opacity: 0.7;
  }
  button:focus {
    outline: 0;
  }

  .moon {
    position: relative;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
      0 0 70px #fff, 0 0 80px #fff, 0 0 100px #ff1177;
    -webkit-animation: rotate 5s ease-in-out infinite;
    animation: rotate 5s ease-in-out infinite;
  }
  .moon .face {
    top: 60%;
    left: 47%;
    position: absolute;
  }
  .moon .face .mouth {
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    background-color: #5c3191;
    width: 25px;
    height: 25px;
    position: absolute;
    -webkit-animation: snore 5s ease-in-out infinite;
    animation: snore 5s ease-in-out infinite;
    transform: rotate(45deg);
    box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.3);
  }
  .moon .face .eyes {
    position: absolute;
    top: -30px;
    left: -30px;
  }
  .moon .face .eyes .eye-left,
  .moon .face .eyes .eye-right {
    border: 4px solid #5c3191;
    width: 30px;
    height: 15px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: 0;
    position: absolute;
  }
  .moon .face .eyes .eye-left:before,
  .moon .face .eyes .eye-left:after,
  .moon .face .eyes .eye-right:before,
  .moon .face .eyes .eye-right:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: #5c3191;
    top: -2px;
    left: -4px;
  }
  .moon .face .eyes .eye-left:after,
  .moon .face .eyes .eye-right:after {
    left: auto;
    right: -4px;
  }
  .moon .face .eyes .eye-right {
    left: 50px;
  }

  @-webkit-keyframes rotate {
    0%,
    100% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate {
    0%,
    100% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }

  @-webkit-keyframes snore {
    0%,
    100% {
      transform: scale(1) rotate(30deg);
    }
    50% {
      transform: scale(0.5) rotate(30deg);
      border-bottom-left-radius: 50%;
    }
  }

  @keyframes snore {
    0%,
    100% {
      transform: scale(1) rotate(30deg);
    }
    50% {
      transform: scale(0.5) rotate(30deg);
      border-bottom-left-radius: 50%;
    }
  }
`;

export default error;
