import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

import Header from '../components/Header';

const AppWrapper = styled.div`
  // max-width: ${({theme}) => theme.viewports.medium.maxWidth}px;
  margin: 60px auto 0;
`;

const App = ({children}) => (
  <div>
    <Header />
    <AppWrapper>
      {children}
    </AppWrapper>
  </div>
);

export default pure(App)
