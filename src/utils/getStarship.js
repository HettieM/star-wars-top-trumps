import React from "react";
import Context from '../store/context';
import { useQuery, gql } from "@apollo/client";

const numberQuery = (gql`{
    allStarships {
      totalCount
      starships {
        name
        starshipClass
        maxAtmospheringSpeed
        costInCredits
        passengers
        filmConnection {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }`
)

const GetData = () => {
  const { loading, error, data } = useQuery(numberQuery);
  // if (loading) return 'loading';
  // if (error) return error;
  if (data) return data;
}

const GetStarship = () => {
  const {state, actions} = React.useContext(Context);
  let response = 'loading...';
  let cards = state.cardsLeft;
  let starships = state.starshipsLeft;
  let newState = state;

  if (cards === 0) response = 'no more cards';

  if (!starships && !cards) {
    const data = GetData();
    if (data) {
      const starshipWithFilmNo = data.allStarships.starships.map((starship) => {
        const filmNo = starship.filmConnection.edges.length;
        return {...starship, films:filmNo}
      })
      newState = {...state, cardsLeft: data.allStarships.totalCount, starshipsLeft: starshipWithFilmNo};
    }
    response = 'loading';
  }

  if (starships && cards) {
    const index = Math.floor(Math.random() * cards);
    response = starships[index];
    if (starships[index] === state.playerVals) {
      if (index !== 0) response = starships[0];
    };
  }

  actions({
    type: 'setState',
    payload: newState,
  });
  return response;
}

export default GetStarship;