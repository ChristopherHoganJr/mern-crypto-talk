import axios from "axios";
import React, { useEffect, useState } from "react";

const Welcome = ({ loggedIn }) => {
  return <div>Welcome {loggedIn ? loggedIn.name : "loading name"}</div>;
};

export default Welcome;
