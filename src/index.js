import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import { ResidentsProvider } from './contexts/residents.context';
import { ProgramsProvider } from './contexts/programs.context';

import './index.scss';

import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ResidentsProvider>
            <ProgramsProvider>
              <App />
            </ProgramsProvider>
          </ResidentsProvider>
        </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
