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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const { setUser } = useContext(MyContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: localStorage.getItem("theme").slice(0, -6),
    });
  };

  const handleSubmit = async () => {
    if (username !== "" && password !== "") {
      try {
        const res = await axios.post("/api/user", {
          username,
          password,
          login,
        });

        if (res.status !== 200) {
          showErrorToast(res.data.msg);
        } else {
          router.push("/");
          localStorage.setItem("tri2doId", res.data.response._id);
          setUser(res.data.response._id);
          setShowModal(false);
        }
      } catch (error) {
        showErrorToast(error.msg);
      }
    } else {
      showErrorToast("Invalid Request");
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
                <input
                  type="text"
                  placeholder="Enter Paswword"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div style={{ width: "100%" }}>
                  <button onClick={handleSubmit}>
                    {!login ? "CONTINUE SOLVING" : "START SOLVING"}
                  </button>
                  <p style={{ textAlign: "right", padding: "0.5rem" }}>
                    click Here to{" "}
                    <span className="login" onClick={() => setLogin(!login)}>
                      {login ? "LOGIN" : "REGISTER"}
                    </span>
                  </p>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
      <ToastContainer />
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
  background: var(--box);
  display: flex;
  justify-content: center;
  z-index: 11;
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
    outline: none;
    border: none;
    border-bottom: 2px solid var(--fourth);
    background: none;
    color: var(--text);
  }
  button {
    width: 100%;
    padding: 15px;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  p {
    color: var(--text);
    font-size: 14px;
  }
  .login {
    text-align: right;
    font-size: 16px;
    color: var(--secondary);
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
