import React from 'react';
import GetStarship from '../utils/getStarship';
import Card from './card';
import Context from '../store/context';
import './card.css';

function Player(props) {
  let {state, actions} = React.useContext(Context);
  if (!state.playerVals) {
  const starship = GetStarship();
    if (starship === "loading") return (<p>loading...</p>);
    if (starship) {
      actions({
        type: 'setState',
        payload: {...state, playerVals: starship}
      })
    }
  }
  
  const starship = state.playerVals
  if (starship) {
    return (
      <div className="player column">
        <Card 
          name={starship.name}
          starshipClass={starship.starshipClass}
          maxSpeed={starship.maxAtmospheringSpeed}
          cost={starship.costInCredits}
          passengers={starship.passengers}
          films={starship.films}
          player={true}
        />
      </div>
    );
  }
  return ('loading...');
}

export default Player;