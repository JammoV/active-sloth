import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { ThemeProvider } from 'styled-components';
import { Settings } from 'luxon';
import theme from './styles/theme';
import 'sanitize.css/sanitize.css';
import './styles/fonts.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <HelmetProvider>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  </HelmetProvider>
);

const render = (Component: typeof App) => {
  Settings.defaultLocale = 'nl';
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
