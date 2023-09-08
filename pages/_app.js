import { useEffect, useState } from "react";
import "../styles/globals.css";
import { MyContext } from "../utils/myContext";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("tri2doId")) {
      setUser(localStorage.getItem("tri2doId"));
    }
  }, []);

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />;
      </MyContext.Provider>
    </>
  );
}
