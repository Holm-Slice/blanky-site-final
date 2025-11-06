import { Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Music from "./components/Music";
import Shows from "./components/Shows";
import LocalMusicSchema from "./components/LocalMusicSchema";
// add later on at some point
// import Press from "./components/Press";
// import Merch from "./components/Merch";

function App() {
  return (
    <div className="min-h-screen bg-blanky-yellow">
      <LocalMusicSchema />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/music" element={<Music />} />
            <Route path="/shows" element={<Shows />} />
            {/* <Route path="/press" element={<Press />} />
            <Route path="/merch" element={<Merch />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
