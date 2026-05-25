import './App.css';
import { useState } from 'react';
import Question from './Question.jsx';
import Footer from './Footer.jsx';

const q1 = {
  text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie", "Meow"],
  correctAnswer: "Alfa"
};

function App() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <Question question={q1} setScore={setScore}/>
      <Question question={q1} setScore={setScore}/>
      <Question question={q1} setScore={setScore}/>
      <Question question={q1} setScore={setScore}/>
      <Question question={q1} setScore={setScore}/>

      <p>score is: {score}</p>

      <Footer />
    </div>
  );
}


export default App;