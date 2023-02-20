import React from "react";

function GameResult({ gameResult, answer, guessHistory }) {
  if (gameResult === 'win') {
    return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessHistory.length} guesses</strong>.
      </p>
    </div>
  } else if (gameResult === 'lose') {
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  }
}

export default GameResult;
