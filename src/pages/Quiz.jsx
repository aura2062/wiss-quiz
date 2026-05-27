import Question from "../components/Question";
import { useState } from "react";
import Button from "../components/Button";

const questions = [{
  id: 0,
  text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie", "Meow"],
  correctAnswer: "Alfa"
}, {
  id: 1,
  text: "Was ist Blau?",
  answers: ["Schluempfe", "das Weltall", "die Sonne", "nichts"],
  correctAnswer: "Schluempfe"
}];


function Quiz({Category="any" /*NumberOfQuestions=10*/}) {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const currentQuestion = questions[questionIndex];
    const [isAnswered, setIsAnswered] = useState(false);

    const nextQuestion = () => {
        setQuestionIndex(questionIndex => questionIndex + 1);
        setIsAnswered(false);
    };
    


    return (
        <div>
            <p>Willkommen beim Quiz über Kategories {Category}</p>
            <div>
                <Question key={currentQuestion.id} question={currentQuestion} setScore={setScore} isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
            </div>

            {isAnswered && <Button text="naechste Frage" onClick={nextQuestion}/>}
            <p>score is: {score}</p>
        </div>
    )
}

export default Quiz;