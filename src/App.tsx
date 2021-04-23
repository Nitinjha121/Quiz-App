import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./Api";
import GlobalStyle from "./components/GlobalStyled";
import { AppStyled, BtnStyled, NextBtn, Loader } from "./components/Style";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const TOTAL_QUESTION = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [scores, setScores] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async function () {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );

    setQuestions(newQuestion);
    setScores(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScores((val) => val + 1);
        e.currentTarget.style.backgroundColor = "#2ed573";
      } else {
        e.currentTarget.style.backgroundColor = "red";
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = function () {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) setGameOver(true);
    else setNumber(nextQuestion);
  };

  return (
    <AppStyled>
      <GlobalStyle />
      <h1>React Quiz</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <BtnStyled className="start" onClick={startTrivia}>
          Start
        </BtnStyled>
      ) : null}

      {!gameOver ? <p className="score">Score:{scores} </p> : null}
      {loading && <Loader className="lds-dual-ring"></Loader>}

      {!loading && !gameOver && (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestion={TOTAL_QUESTION}
          callback={checkAnswer}
        />
      )}

      {!loading &&
        !gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTION - 1 && (
          <NextBtn className="next" onClick={nextQuestion}>
            Next Question
          </NextBtn>
        )}
    </AppStyled>
  );
}

export default App;
