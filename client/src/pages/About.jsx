import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>About page</h2>
      {JSON.stringify(user, null, 2)}
    </div>
  );
};

export default About;
