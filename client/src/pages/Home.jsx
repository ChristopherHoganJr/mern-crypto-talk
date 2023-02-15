import React, { useEffect, useContext } from "react";
import { UserContext } from "../components/UserContext";
import Welcome from "../components/Welcome";
import login from "../utils/login";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <section className="mx-auto max-w-6xl">
        <h1>This is home</h1>
        <p>{JSON.stringify(user, null, 2)}</p>
      </section>
    </>
  );
};

export default Home;
