import './App.css';
import Footer from './Footer';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;

/*

        <Link to="/setup">Quiz-Setup</Link>
        <Link to="/impressum">Impressum</Link>


        <Route path="/setup" element={<QuizSetup />} />
        <Route path="/impressum" element={<Impressum />} />
*/