import './App.css';
import Hero from "./pages/hero/hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
