import React from 'react';
import Context from '../store/context';

function Score(props) {
  const {state, actions} = React.useContext(Context);
  let newStarships = state.starshipsLeft;

  if (state.starshipsLeft && state.playerVals && state.compVals) {
    newStarships = state.starshipsLeft.filter(e => e !== state.playerVals && e !== state.compVals)
  }
  const newState = {
    showComp: false,
    score: state.score,
    cardsLeft: state.cardsLeft-2,
    starshipsLeft: newStarships,
    compVals: null,
    playerVals: null,
    category: null,
    result: null,
  }

  let result = (
    <div>
      <p>Your Score = {state.score} </p>
    </div>
  )

  if (state.result) {
    result = (
      <div>
        <p>Score = {state.score}</p>
        <p>You {state.result}</p>
        <button onClick={() => {
          actions({
            type: 'setState',
            payload: newState,
          });
        }}>Play Again</button>
      </div>
    )
  }

  return result;
}

export default Score;