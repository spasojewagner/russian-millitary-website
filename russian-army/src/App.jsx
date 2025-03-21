import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Leadership from "./LeaderShip";
import Navbar from "./NavBar";
import Structure from "./Structure";
import Wagner from "./Wagner.jsx";
import WagnerMap from "./WagnerMap.jsx";
import News from "./News.jsx";
import JoinUs from "./JoinUs.jsx";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/wagner" element={<Wagner />} />
        <Route path="/wagnermap" element={<WagnerMap />} />
        <Route path="/news" element={<News />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
