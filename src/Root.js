import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import './styles/styles.css'

import { reset, theme } from './theme';
import Home from './containers/Home';
import SearchJobs from './containers/SearchJobs';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  background: ${({theme}) => theme.colors.grayscale.xxDark};
  z-index: 100;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  padding: 20px 10px;
  color: ${({theme}) => theme.colors.light};
`;

const MainWrapper = styled.main`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 60px 20px 0;
`;

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

        <HeaderWrapper>
          <HeaderLink to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/search">
            Search
          </HeaderLink>
        </HeaderWrapper>

        <MainWrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchJobs} />
        </MainWrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
