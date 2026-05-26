import Question from "../components/Question";
import { useState } from "react";

const questions = [{
  text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie", "Meow"],
  correctAnswer: "Alfa"
}, {
  text: "Was ist Blau?",
  answers: ["Schluempfe", "das Weltall", "die Sonne", "nichts"],
  correctAnswer: "Schluempfe"
}];


function Quiz({Category="any" /*NumberOfQuestions=10*/}) {
    const [score, setScore] = useState(0);


    return (
        <div>
            <p>Willkommen beim Quiz über Kategories {Category}</p>
            <div>
                {questions.map((x)=>(<Question key={x} question={x} setScore={setScore} />))}
            </div>

            <p>score is: {score}</p>
        </div>
    )
}

export default Quiz;