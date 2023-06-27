import React, { useState } from 'react'
import questions from "./Data";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowscore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((currScore)=>currScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowscore(true);
    }
  }

  const restart =()=>{
    setCurrentQuestion(0);
    setShowscore(false);
    setScore(0)
  }

  return (
    <div className='app'>

      {showScore ? (
       <div className='score-container'>
        <div className='score-section'>
          You Scored {score} out of {questions.length};

        </div>
       
       <button onClick={restart}>Restart</button>
       
       </div>

      ) : (
        <>
          <div className='question-section'>

            <div className='question-count'>
              <span>Questions {currentQuestion + 1}</span> /{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            <div>
              {questions[currentQuestion].answerOptions.map((answerOptions, index) => {

                return <button key={index}

                  onClick={() => handleAnswerOptionClick(answerOptions.isCorrerct)}>{answerOptions.answerText}</button>;

              })}
            </div>


          </div>
        </>
      )}


    </div>
  )
}

export default App