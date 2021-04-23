import styled from "styled-components";

export const AppStyled = styled.div`
  padding-top: 14vh;

  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media (max-width: 700px) {
    height: 100%;
    padding-bottom: 15%;
  }
`;

export const BtnStyled = styled.button`
  padding: 7px;
  border-radius: 5px;
  width: 120px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  background-color: #7bed9f;
  color: #000;
  font-weight: bold;
`;

export const NextBtn = styled(BtnStyled)`
  position: relative;
  bottom: -5%;
  right: 0%;
`;

export const ButtonStyled = styled(BtnStyled)`
  width: 100%;
  height: 100%;
`;

export const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 2fr));
  grid-gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }
`;

export const Question = styled.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  margin: 30px;
  display: block;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
