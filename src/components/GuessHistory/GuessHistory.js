import React from "react";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessHistory({ guessHistory }) {
    const emptyGuess = range(0, 5).map(() => '');
    const maximumEmptyGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => emptyGuess);

    function lastSixItems(_, i) {
        return i >= (guessHistory.length - NUM_OF_GUESSES_ALLOWED);
    }

    function firstSixItems(_, i) {
        return i < 6;
    }

    return <div
        className="guess-history"
        style={{
            textTransform: "uppercase"
        }}
    >
        {guessHistory
            .filter(lastSixItems)
            .concat(maximumEmptyGuesses)
            .filter(firstSixItems)
            .map(historyItem =>
                <p
                    className="guess"
                    key={crypto.randomUUID()}>
                    {range(0, historyItem.length)
                        .map(i =>
                            <span
                                className="cell"
                                key={i}
                            >{historyItem[i]}</span>)}
                </p>
            )
        }
    </div>;
}

export default GuessHistory;
