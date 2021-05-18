import React from "react";
import { useQuery, gql } from "@apollo/client";
import Card from '../components/card';


const starshipQuery = (number) => {
  return (gql`
  query getStarship {
    starship(starshipID: "${number}") {
      name
      starshipClass
      maxAtmospheringSpeed
      costInCredits
      passengers
    }
  }`)
}

// const starshipsUsed = {};

const randomNumber = () => {
  return Math.floor(Math.random() * 36);
}

const GetStarship = (props) => {
  const number = randomNumber();
  const query = starshipQuery(number);
  const { loading, error, data } = useQuery(query);

    // if (loading) return 'loading';
    // if (error) return 'error';
    if (data) {
      return data.starship;
    }
};

export default GetStarship;