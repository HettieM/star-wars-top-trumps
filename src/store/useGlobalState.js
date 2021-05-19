import {useState} from 'react';

const useGlobalState = () => {
  const [state, setState] = useState({
    showComp: false,
    score: 0,
    cardsLeft: null,
    starshipsLeft: null,
    compVals: null,
    playerVals: null,
    result: null,
  })

  const actions = (action) => {
    const {type, payload} = action;
    switch (type) {
      case 'setState': 
        return setState(payload);
      default:
        return state;
    }
  }
  return {state, actions}
}

export default useGlobalState;