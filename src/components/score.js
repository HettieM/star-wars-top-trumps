import React from 'react';
import Context from '../store/context';
import Computer from './computer';

function Score(props) {
  const {state, actions} = React.useContext(Context);

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
            payload: {score: state.score}
          });
        }}>Play Again</button>
      </div>
    )
  }
  return result;
}

export default Score;