import Question from "../components/Question";
import { useState } from "react";
import Button from "../components/Button";


function Quiz({Category="any", /*NumberOfQuestions=10*/ reset_trigger}) {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const currentQuestion = questions[questionIndex];
    const [isAnswered, setIsAnswered] = useState(false);
    const isLastQuestion = questionIndex === questions.length - 1;
    const [showEndScreen, setShowEndScreen] = useState(false);
    
    const toggleShowEndScreen = () => {
        setShowEndScreen(!showEndScreen);
    }
    const nextQuestion = () => {
        setQuestionIndex(questionIndex => questionIndex + 1);
        setIsAnswered(false);
    };

    if (showEndScreen) {
        return (
            <div>
                <p>Du hast {score} / {questions.length} richtig beantwortet, also hast du {score / questions.length * 100.0}% von allen Fragen richtig, krass </p>
                <Button text="Willst du nochmal Spielen? Klicke mich!" onClick={()=>{reset_trigger()}}/>
            </div>
        );
    } 
    return (
        <div>
            <p>Willkommen beim Quiz über Kategories {Category}</p>

            <div>
                <Question key={currentQuestion.id} question={currentQuestion} setScore={setScore} isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
            </div>

            {!isLastQuestion && isAnswered && <Button text="naechste Frage" onClick={nextQuestion}/>}
            
            {isLastQuestion && isAnswered && <Button text="Quiz beenden" onClick={toggleShowEndScreen} />}
            
            <p>score is: {score}</p>
        </div>
    )
    
}

export default Quiz;