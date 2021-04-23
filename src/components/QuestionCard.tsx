import React from "react";
import { AnswerObject } from "../App";
import { ButtonStyled, AnswerContainer, Container, Question } from "./Style";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => (
  <Container>
    <p className="number">
      Question: {questionNr}/{totalQuestion}
    </p>
    <Question dangerouslySetInnerHTML={{ __html: question }} />
    <AnswerContainer>
      {answers.map((answer) => (
        <div key={answer}>
          <ButtonStyled
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </ButtonStyled>
        </div>
      ))}
    </AnswerContainer>
  </Container>
);
export default QuestionCard;
