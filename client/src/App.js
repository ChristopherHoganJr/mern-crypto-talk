import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Talk from "./pages/Talk";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/talk"} element={<Talk />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
