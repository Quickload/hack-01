import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import homeIcon from '../images/icons/quickload-truck.svg';
import backIcon from '../images/icons/back.svg';

import { getIsFetchingSelectedJob, getSelectedJob } from '../reducers/jobs/selector';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.grayscale.xxDark};
  z-index: 100;
`;

const HeaderLink = styled(Link) `
  display: inline-block;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.light};
  transition: color 0.15s linear;

  :hover, :focus, :active {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;

const hoc = compose(
  connect((state) => ({
    selectedJob: getSelectedJob(state),
  }), (dispatch) => ({})),
  pure,
);

export const Header = ({ selectedJob }) => (
  <HeaderWrapper>
    {selectedJob ?
      <div className="row">
        <div className="col-4">
          <HeaderLink to="/search">
            <img src={backIcon} alt="Back" />
          </HeaderLink>
        </div>
        <div className="col-8 textRight">
          <HeaderLink to="/search">
            HOOK ME UP!
          </HeaderLink>
        </div>
      </div>
      :
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
    }
  </HeaderWrapper>
);

export default hoc(Header);
