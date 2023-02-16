import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState('');

    return <form className="guess-input-wrapper"
                 onSubmit={event => {
                     event.preventDefault();
                     console.log({guess: guess.toUpperCase()});
                     setGuess('');
                 }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            value={guess}
            onChange={event => setGuess(event.target.value)}
            minLength={5}
            maxLength={5}
            style={{
                textTransform: "uppercase"
            }}
        />
    </form>;
}

export default GuessInput;
