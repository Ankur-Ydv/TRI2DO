import styled from "@emotion/styled";
import React, { useContext } from "react";
import MyContext from "../utils/MyContext";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  const { user, setUser } = useContext(MyContext);

  return (
    <>
      <Container>
        <ProfileComponent />
      </Container>
    </>
  );
};

const Container = styled.div``;

export default Profile;
