import React, { useContext } from 'react'
import { AppContext } from '../App';

function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className='gameOver'>
        <h1>{gameOver.guessedWord ? "We did it fam!" : "You Suck!"}</h1>
        {!gameOver.guessedWord && (<h2>The correct word was: {correctWord}</h2>)}
        {gameOver.guessedWord && <h2>You guessed it on attempt {currAttempt.attempt}</h2>}
        <button className='button' onClick={refreshPage}>Play Again?</button>
    </div>
  )
}

export default GameOver