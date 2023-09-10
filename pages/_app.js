import { useEffect, useState } from "react";
import "../styles/globals.css";
import MyContext from "../utils/MyContext";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("tri2doId")) {
      setUser(localStorage.getItem("tri2doId"));
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <MyContext.Provider value={{ user, setUser }}>
          <Component {...pageProps} />;
        </MyContext.Provider>
      )}
    </>
  );
}
