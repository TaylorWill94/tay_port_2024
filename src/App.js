// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./Nav/Nav";
import Folder from "./components/Folder/Folder";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Folder />
    </div>
  );
}

export default App;
