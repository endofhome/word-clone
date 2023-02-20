import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GameResult from "../GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameResult, setGameResult] = React.useState(null);
  const [guessHistory, setGuessHistory] = React.useState([]);
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

  return <>
    <GuessHistory guessHistory={guessHistory} />
    <GuessInput handleGuess={handleGuess} gameResult={gameResult} />
    <GameResult gameResult={gameResult} answer={answer} guessHistory={guessHistory} />
  </>;
}

export default Game;
