import { Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import Music from "./components/Music";
import Shows from "./components/Shows";
// add later on at some point
// import Press from "./components/Press";
// import Merch from "./components/Merch";

function App() {
  return (
    <>
      <div id="main-div">
        <Navbar />

        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/shows" element={<Shows />} />
          {/* <Route path="/press" element={<Press />} />
          <Route path="/merch" element={<Merch />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Home /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
