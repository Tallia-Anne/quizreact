import React, { useState, useEffect } from 'react';
import './pages/home.css';




import Start from '../components/Start';
import Question from '../components/Question';
import End from '../components/End';
import Modal from '../components/Modal';
import quizData from '../data/quiz.json';


let interval;

const Home = () => {
  //les etapes 
  const [step, setStep] = useState(1);
  //ça va activer les questions  
  const [activeQuestion, setActiveQuestion] = useState(0);
  //les réponces
  const [answers, setAnswers] = useState([]);
  //afficher le modal
  const [showModal, setShowModal] = useState(false);
  //le temps
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="App">
    
      
      <div className="containerquiz">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      </div>
      {showModal && <Modal
        //fermer le modal
        onClose={() => setShowModal(false)}
        //afficher les résultats
        results={answers}
        data={quizData.data}
      />}
      
    </div>
  );
}

export default Home;
