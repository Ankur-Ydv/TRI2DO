import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { MyContext } from "../utils/myContext";
import { useRouter } from "next/router";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const { setUser } = useContext(MyContext);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (username !== "") {
      const res = await axios.post("/api/user", { username });

      if (res.status !== 200) alert(res.data.msg);
      else {
        router.push("/");
        localStorage.setItem("tri2doId", res.data.response._id);
        setUser(res.data.response._id);
        setShowModal(false);
      }
    }
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <button onClick={handleSubmit}>Start Solving</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  input {
    padding: 1rem;
    width: 100%;
  }
  button {
    width: 100%;
    padding: 15px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export default Modal;
