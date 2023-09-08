import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { BsSun, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light-theme");

  const handleClick = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      window.localStorage.setItem("theme", "light-theme");
    } else {
      setTheme("dark-theme");
      window.localStorage.setItem("theme", "dark-theme");
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("theme")) {
      setTheme(window.localStorage.getItem("theme"));
    } else {
      window.localStorage.setItem("theme", "light-theme");
      setTheme(window.localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    document.body.className = window.localStorage.getItem("theme");
  }, [theme]);

  return (
    <>
      <Container onClick={handleClick}>
        {theme === "light-theme" ? (
          <BsSun color="var(--blue)" className="toggle off" />
        ) : (
          <BsFillSunFill color="var(--blue)" className="toggle on" />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  cursor: pointer;
  .toggle {
    font-size: 28px;
    color: var(--text);
  }
`;

export default ThemeToggler;
