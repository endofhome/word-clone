import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  function addGuessToHistory(newGuess) {
    const guessResult = checkGuess(newGuess, answer);
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(guessResult);
    setGuessHistory(nextGuessHistory);
  }

  return <>
    <GuessHistory guessHistory={guessHistory} />
    <GuessInput addGuessToHistory={addGuessToHistory} />
  </>;
}

export default Game;
