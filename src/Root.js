import React from 'react';
import { Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import './styles/styles.css'

import { reset, theme } from './theme';
import SplashPage from './containers/SplashPage';
import SearchJobs from './containers/SearchJobs';

export const App = () => {
  injectGlobal`
    ${reset(theme)}
    html {
      background-color: ${theme.colors.grayscale.xxLight};
    }
    body {
      font-family: 'Roboto', sans-serif;
      font-size: ${theme.fontSize.small}px;
      color: ${theme.colors.grayscale.xDark};
      font-weight: 400;
      letter-spacing: 0;
      background-color: transparent;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet titleTemplate="%s - QuickLoad" defaultTitle="Accelerated Shipping">
          <meta name="description" content="Our logistics platform connects shippers and truckers, making their lives easier while growing their business." />
          <title>Accelerated Shipping</title>
        </Helmet>

        <Route exact path="/" component={SplashPage} />
        <Route exact path="/search" component={SearchJobs} />
      </div>
    </ThemeProvider>
  );
};

export default App;
