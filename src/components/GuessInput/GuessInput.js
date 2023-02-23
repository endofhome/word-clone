import React from 'react';
import {NUM_OF_LETTERS_PER_GUESS} from "../../constants";

function GuessInput({ handleGuess, gameResult, inputReference }) {
    const [potentialGuess, setPotentialGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        console.log({guess: potentialGuess.toUpperCase()});
        setPotentialGuess('');

        handleGuess(potentialGuess);
    }

    return <form className="guess-input-wrapper"
                 onSubmit={event => handleSubmit(event)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            value={potentialGuess}
            onChange={event => {
                const onlyAlphabeticCharacters = event.target.value.replace(/[^a-zA-Z]+$/, '');
                return setPotentialGuess(onlyAlphabeticCharacters);
            }}
            minLength={NUM_OF_LETTERS_PER_GUESS}
            maxLength={NUM_OF_LETTERS_PER_GUESS}
            style={{
                textTransform: "uppercase"
            }}
            disabled={gameResult !== null}
            required={true}
            ref={inputReference}
        />
    </form>;
}

export default GuessInput;
