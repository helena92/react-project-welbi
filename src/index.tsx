import React from 'react';
import ReactDOM from 'react-dom/client';
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();