import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
