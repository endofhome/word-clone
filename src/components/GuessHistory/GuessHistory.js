import React from "react";

function GuessHistory({ guessHistory }) {
  return <div
      className="guess-history"
      style={{
        textTransform: "uppercase"
      }}
    >
    {guessHistory.map(historyItem =>
      <p
          className="guess"
          key={crypto.randomUUID()}
      >{historyItem}</p>
    )}
  </div>;
}

export default GuessHistory;
