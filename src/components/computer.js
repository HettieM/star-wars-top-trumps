import React from 'react';
import GetStarship from '../utils/getStarship';
import Card from './card';
import Context from '../store/context';

function Computer(props) {
  const {state, actions} = React.useContext(Context);
  if (!state.showComp) return 'Please pick a category to play...';

  if (state.showComp && !state.compVals) {
    const starship = GetStarship();
    if (starship) {
      actions({
        type: 'setState',
        payload: {...state, compVals: starship}
      });
    }
  }

  if (state.compVals && state.showComp && state.playerVals && !state.result) {
    const score = state.score;
    const playerVal = state.playerVals[state.category];
    const compVal = state.compVals[state.category];
    if (playerVal > compVal) {
      actions({
        type: 'setState',
        payload: {...state, result: 'win', score: score+1}
      })
    }
    if (playerVal < compVal) {
      actions({
        type: 'setState',
        payload: {...state, result: 'lose', score: score-1}
      });
    }
    if (playerVal === compVal) {
      actions({
        type: 'setState',
        payload: {...state, result: 'draw'}
      });
    }
  }

    const starship = state.compVals;
    if (state.compVals && state.showComp && state.playerVals) {
      return (
        <div className="Player">
          <Card 
            name={starship.name}
            starshipClass={starship.starshipClass}
            maxSpeed={starship.maxAtmospheringSpeed}
            cost={starship.costInCredits}
            passengers={starship.passengers}
            films={starship.films}
            player={false}
            />
        </div>
      );
    }
  return ('loading...');
  
}

export default Computer;