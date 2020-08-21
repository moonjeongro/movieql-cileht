import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import client from './Components/Apollo';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);