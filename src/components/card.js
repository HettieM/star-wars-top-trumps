import React from "react";
import Context from '../store/context';
import './card.css';

function Card(props) {
  const {name, starshipClass, maxSpeed, cost, passengers, films, player} = props;

  return (
    <div className="wrapper">
      <div className="card card-1">
        <h1 className="name classification">
          <span className="key">Name: </span>
          <span className="value">{name || "N/A"}</span>
        </h1>
        <p className="starshipClass classification">
          <span className="category">Starship Class: </span>
          <span className="data">{starshipClass || "N/A"}</span>
        </p>
        <ClickableClassification category={"Max Atmosphering Speed: "} data={maxSpeed} className={"maxAtmospheringSpeed"} player={player} />
        <ClickableClassification category={"Cost in Credits: "} data={cost} className={"costInCredits"} player={player} />
        <ClickableClassification category={"No. of Passengers: "} data={passengers} className={"passengers"} player={player} />
        <ClickableClassification category={"No. of Films: "} data={films} className={"films"} player={player} />
      </div>
    </div>
  )
}

function ClickableClassification(props) {
  const {category, data, className, player} = props;
  const {state, actions} = React.useContext(Context);

  return (
    <p className={"classification " + className}>
      <span className="category selectable" onClick={() => {
        if (!player || state.compVals) return;
        actions({
          type: 'setState',
          payload: {...state, showComp: true, category: className}
        });
        
      }}>{category}</span>
      <span className="data selectable">{data || "N/A"}</span>
    </p>
  )
}


export default Card;