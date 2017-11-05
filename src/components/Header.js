import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import homeIcon from '../images/icons/quickload-truck.svg';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: ${({theme}) => theme.colors.grayscale.xxDark};
  z-index: 100;
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
    <div className="row">
      <div className="col-4">
        <HeaderLink to="/">
          <img src={homeIcon} alt="Home" />
        </HeaderLink>
      </div>
      <div className="col-8 textRight">
        <HeaderLink to="/my-jobs">
          My Jobs
        </HeaderLink>
        <HeaderLink to="/search">
          Search
        </HeaderLink>
      </div>
    </div>
  </HeaderWrapper>
);

export default Header;
