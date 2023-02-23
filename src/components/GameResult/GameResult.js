import React, {useState} from "react";

function GameResult({ gameResult, answer, guessHistory, resetGame }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => { setIsHover(true); };
  const handleMouseLeave = () => { setIsHover(false); };

  const restartFragment = <>
    <p style={{marginTop: "10px"}}>
      <svg xmlns="http://www.w3.org/2000/svg"
           width="35"
           height="35"
           fill="currentColor"
           className="bi bi-arrow-counterclockwise"
           viewBox="0 0 16 16"
           style={{
             display: "inline-block",
             alignContent: "center"
           }}
           onClick={event => {
             event.preventDefault();
             resetGame();
           }}
           cursor={isHover ? "pointer" : "auto"}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
      >
        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
      </svg>
    </p>
  </>

  if (gameResult === 'win') {
    return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessHistory.length} guesses</strong>.
      </p>
      {restartFragment}
    </div>
  } else if (gameResult === 'lose') {
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      {restartFragment}
    </div>
  }
}

export default GameResult;
