import React from 'react';

function GuessInput({ addGuessToHistory }) {
    const [potentialGuess, setPotentialGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        console.log({guess: potentialGuess.toUpperCase()});
        setPotentialGuess('');

        addGuessToHistory(potentialGuess);
    }

    return <form className="guess-input-wrapper"
                 onSubmit={event => handleSubmit(event)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            value={potentialGuess}
            onChange={event => setPotentialGuess(event.target.value)}
            minLength={5}
            maxLength={5}
            style={{
                textTransform: "uppercase"
            }}
        />
    </form>;
}

export default GuessInput;
