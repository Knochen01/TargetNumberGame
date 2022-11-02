import React from 'react';
import { useState} from 'react';
import "./NumberGames.css";

 
const NumberGames = (props) => {
    const randomNumber = () =>  Math.floor(Math.random() * 8) + 1 ;

    const [placeholder, placeholder2] = useState(randomNumber());
    const [target, setTarget] = useState(randomNumber());
    const [guessCount, setGuessCount] = useState(0);


    const isWinner = placeholder == target;

    const restart = () => {
        setTarget(randomNumber())
        placeholder2(0)
        setGuessCount(0)
    }

    const makeGuess = () => {
        placeholder2(randomNumber());
        setGuessCount(guessCount + 1)

    }

    return (
        <>
        <div className="NumberGames-conainer1">
        <div className='NumberGames-container'>
        <h1 className= {target == placeholder ? 'winner': "looser"}>TargetNumber: {target}</h1>
        <div>Number of guesses so far: {guessCount}</div>
        <h1 style={{color: target == placeholder ? 'green' : "red"}}>Your Guess: {placeholder}</h1>
        {!isWinner && 
         <button onClick={makeGuess}>Generating Random Number</button> }
         <button onClick={restart}>New Game</button>
        </div>
        </div>
        </>
    ) 


}

export default NumberGames;