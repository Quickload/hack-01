import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Grid, GridItem } from '../components/shared/Grid';

import homeIcon from '../images/icons/quickload-truck.svg';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({theme}) => theme.colors.grayscale.xxDark};
  z-index: 100;
`;

const StyledGrid = styled(Grid)`
  max-width: ${({theme}) => theme.viewports.small.maxWidth}px;
  margin: 0 auto;
`;

const RightSideGridItem = styled(GridItem)`
  text-align: right;
`;

const HeaderLink = styled(Link)`
  display: inline-block;
  padding: 20px 10px;
  color: ${({theme}) => theme.colors.light};
  transition: color 0.15s linear;

  :hover, :focus, :active {
    color: ${({theme}) => theme.colors.primary.base};
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <StyledGrid>
      <GridItem small={4}>
        <HeaderLink to="/">
          <img src={homeIcon} alt="Home" />
        </HeaderLink>
      </GridItem>
      <RightSideGridItem small={8}>
        <HeaderLink to="/my-jobs">
          My Jobs
        </HeaderLink>
        <HeaderLink to="/search">
          Search
        </HeaderLink>
      </RightSideGridItem>
    </StyledGrid>
  </HeaderWrapper>
);

export default Header;
