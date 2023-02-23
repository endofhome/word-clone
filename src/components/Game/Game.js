import React, {useEffect, useRef} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GameResult from "../GameResult";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [gameResult, setGameResult] = React.useState(null);
  const [guessHistory, setGuessHistory] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleGuess(newGuess) {
    const guessResult = checkGuess(newGuess, answer);
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(guessResult);
    setGuessHistory(nextGuessHistory);

    if (newGuess.toUpperCase() === answer.toUpperCase()) {
      setGameResult("win");
    } else if (nextGuessHistory.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGameResult(null);
    setGuessHistory([]);
  }

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return <>
    <GuessHistory guessHistory={guessHistory} />
    <GuessInput handleGuess={handleGuess} gameResult={gameResult} inputReference={inputReference} />
    <GameResult gameResult={gameResult} answer={answer} guessHistory={guessHistory} resetGame={resetGame} />
    <Keyboard guessHistory={guessHistory} />
  </>;
}

export default Game;
