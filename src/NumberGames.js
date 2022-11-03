import React, { useState } from 'react';
import './NumberGames.css';


const NumberGame = (props) => {
    // Functions-----------------------------------------------------------------
    const genRandom = () => Math.floor(Math.random() * 6) + 1

    const restart = () => {
        setTarget(genRandom())
        setGuess(null)
        setGuessCount(0)
    }
    const makeGuess = () => {
        setGuess(genRandom())
        setGuessCount(guessCount + 1)
    }

    // UseStates--------- --------------------------------------------------------
    const [guess, setGuess] = useState(genRandom)
    const [target, setTarget] = useState(genRandom) 
    const [guessCount, setGuessCount] = useState(0)
    const isWinner = target === guess;
  
    return (
        <>
        <h1>Target Num: {target}</h1>
        <h1 style={{ color: isWinner ? 'green':'red' }}>Your Guess: {guess}</h1>
        <h4>Guesses so far: {guessCount}</h4>
         {!isWinner && <button onClick={makeGuess}>Generate Number</button>}
         <button onClick={restart}>New Game</button>
        </>
    ) 
} 
export default NumberGame;
