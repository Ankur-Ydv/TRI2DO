import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import MyContext from "../utils/MyContext";
import axios from "axios";
import { MdOutlineChangeCircle } from "react-icons/md";
import DoughnutChart from "./DoughtnutChart";

const imgOptions = [
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg",
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?size=626&ext=jpg",
];

const ProfileComponent = () => {
  const { user } = useContext(MyContext);
  const [usr, setUsr] = useState();
  const [isLoading, setIsLoadin] = useState(false);
  const [usrImg, setUsrImg] = useState(
    localStorage.getItem("avatar") ||
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?size=626&ext=jpg"
  );
  const fetchUser = async () => {
    setIsLoadin(true);
    const res = await axios.get(`/api/user/${user}`);
    setUsr(res.data.response.username);
    setIsLoadin(false);
  };

  const changeProfile = () => {
    setUsrImg(imgOptions[Math.floor(Math.random() * imgOptions.length)]);
    localStorage.setItem("avatar", usrImg);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <MainLayout>
      <Container>
        <FlexBox>
          <div>
            <UserImage src={usrImg} alt={usr} />
            <MdOutlineChangeCircle
              onClick={changeProfile}
              style={{ cursor: "pointer" }}
            />
          </div>
          <UserName>{!isLoading ? `${usr} 👑` : "Loading... 🕒"}</UserName>
        </FlexBox>
        <DoughnutChart />
      </Container>
    </MainLayout>
  );
};

const Container = styled.div`
  /* min-height: 100%; */
  width: 70%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 16px;
  background-color: var(--box);
  text-align: center;
  color: var(--text);
  @media (max-width: 500px)
  {
    width: 90%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 0.5rem 0;
  align-items: center;
  @media (max-width: 500px)
  {
    flex-direction: column;
    gap: 1rem;
  }
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  `;

const UserName = styled.h2`
/* font-size: 2vw; */
  font-size: 1.5rem;
  margin: 8px 0;
  @media (max-width: 500px)
  {
    font-size: 1rem;
  }
`;

const UserDetails = styled.p`
  font-size: 1rem;
  color: #555;
`;
export default ProfileComponent;
