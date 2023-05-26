import './App.css';
import Hero from "./pages/hero/hero";
import Stories from './pages/stories/stories';
import Bio from './pages/bio/bio';
import Unsolved from './pages/unsolved/unsolved';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/bios" element={<Bio />} />
          <Route path="/unsolved" element={<Unsolved />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
