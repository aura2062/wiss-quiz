import './App.css';
import Button from './Button';
import { useState } from 'react';

const question = {
  text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie", "Meow"],
  correctAnswer: "Alfa"
};

function App() {
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleAnswerClick = (selectedAnswer) => {
    setIsAnswered(true);
  
    if (selectedAnswer === question.correctAnswer) {
      setFeedback("Richtig!");
      setScore(score => score + 1);
    } else {
      setFeedback(`Falsch! Die richtig Antwort wäre: ${question.correctAnswer}`);
    }
  };  

  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <h2>{question.text}</h2>
      
      <div>
        {question.answers.map((answer) => ( <Button key = {answer} text = {answer} onClick={ () => handleAnswerClick(answer)} />))}
      </div>
      {feedback && <p>{feedback}</p>}
      <p>score is: {score}</p>

    </div>
  );
}


export default App;