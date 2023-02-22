import React from "react";

function Keyboard({guessHistory}) {
    const topRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const middleRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const bottomRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    function toRow(rowKeys) {
        return rowKeys.map(key => ({
            letter: key,
            status: null
        }));
    }

    const topRow = toRow(topRowKeys);
    const middleRow = toRow(middleRowKeys);
    const bottomRow = toRow(bottomRowKeys);

    const rows = [topRow, middleRow, bottomRow]
    rows.forEach(row => {
        row.forEach((key, i) => {
            guessHistory.forEach(guess => {
                guess.forEach(guessLetterResult => {
                    if (guessLetterResult.letter.toUpperCase() === key.letter.toUpperCase()) {
                        row[i] = guessLetterResult;
                    }
                });
            });
        })
    });

    function borderAndBackgroundColour(key, defaultColour) {
        if (key.status === null) {
            return defaultColour;
        } else if (key.status === "misplaced") {
            return "var(--color-warning)";
        } else if (key.status === "incorrect") {
            return "var(--color-gray-300)";
        } else if (key.status === "correct") {
            return "var(--color-success)";
        }
    }

    function htmlForRow(row) {
        return <>
            <div
                style={{
                    position: "sticky",
                    zIndex: -1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {row.map(key =>
                    <span
                        style={{
                            display: "inline-block",
                            width: "28px",
                            height: "28px",
                            fontSize: "large",
                            border: "solid",
                            borderRadius: "20%",
                            borderColor: borderAndBackgroundColour(key, "white"),
                            backgroundColor: borderAndBackgroundColour(key, "lightgrey"),
                            margin: "1%",
                            padding: "2px"
                        }}
                        className={key.status !== null ? `cell ${key.status}` : ''}
                        key={crypto.randomUUID()}
                    >{key.letter}</span>)
                }
            </div>
        </>
    }

    return <div>
        <div>{htmlForRow(topRow)}</div>
        <div>{htmlForRow(middleRow)}</div>
        <div>{htmlForRow(bottomRow)}</div>
    </div>;
}

export default Keyboard;
