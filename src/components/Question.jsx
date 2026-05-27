
import Button from './Button';
import {useState} from 'react';

function Question({ question = {text: "none", answers: ["none","empty"], correctAnswer: "none"}, setScore = null, isAnswered = null, setIsAnswered = null }) {
    const [feedback, setFeedback] = useState(null);

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
            <h2>{question.text}</h2>
            <div>
                {question.answers.map((answer) => ( <Button key = {answer} text = {answer} onClick={ () => handleAnswerClick(answer)} disabled={isAnswered}/>))}
            </div>
            
            {feedback && <p>{feedback}</p>}
        </div>
    );
}

export default Question;