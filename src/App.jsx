import './App.css';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
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