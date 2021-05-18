import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import useGlobalState from './store/useGlobalState';
import Context from './store/context';


const client = new ApolloClient({
  uri: "https://connectr-swapi.herokuapp.com/",
  cache: new InMemoryCache()
});

const Index = () => {
  const store = useGlobalState();
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Context.Provider value={store}>
          <App />
        </Context.Provider>
      </ApolloProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
