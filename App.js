/**
 * Yipah Challenge App
 * https://github.com/daniellamarr/yipah_challenge_app
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import Router from './Router';
import client from './src/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;