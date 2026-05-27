import './App.css';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import { useState } from "react";


function App() {
  const [quiz_version, setQuiz_version] = useState(0);

  const force_reset_everything = () => {
    setQuiz_version(prev => prev + 1);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz key={quiz_version} reset_trigger={force_reset_everything} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;