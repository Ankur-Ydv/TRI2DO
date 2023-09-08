import styled from "@emotion/styled";
import React, { useContext } from "react";
import { MyContext } from "../utils/myContext";

const Profile = () => {
  const { user, setUser } = useContext(MyContext);

  return (
    <>
      <Container>
        <div></div>
      </Container>
    </>
  );
};

const Container = styled.div``;

export default Profile;
