import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withHandlers, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import styled from 'styled-components';

import homeIcon from '../images/icons/quickload-truck.svg';
import backIcon from '../images/icons/back.svg';

import {
  // getIsFetchingSelectedJob,
  getSelectedJob,
} from '../reducers/jobs/selector';
import {
  // fetchSelectedJobAsync,
  clearSelectedJobAction,
} from '../actions/doFetchSelectedJobAsync';
import { getEmailFormData } from '../reducers/emails/selector';
import { sendEmailAsync } from '../actions/sendEmailsAsync';
import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { getIsFetchingUser, getUser } from '../reducers/user/selector';

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

const HeaderButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary.base};
  margin-right: 10px;
`

const hoc = compose(
  withRouter,
  connect((state) => ({
    selectedJob: getSelectedJob(state),
    currentRoute: state.routing.location.pathname,
    email: getEmailFormData(state),
    user: getUser(state),
    isFetchingUser: getIsFetchingUser(state),
  }), (dispatch) => ({
    clearSelectedJob: () => dispatch(clearSelectedJobAction()),
    submitFeedback: (user, job, email) => dispatch(sendEmailAsync(user, job, email)),
    fetchUser: () => dispatch(fetchUserAsync()),
  })),
  withHandlers({
    headerRedirect: ({ history }) => () => {
      history.push(`${history.location.pathname}/leadcapture`);
    },
    submitRedirect: ({ history }) => () => {
      history.push(`/congrats`);
    },
  }),
  lifecycle({
    componentDidMount() {
      const { user, fetchUser, isFetchingUser } = this.props;

      if (!isFetchingUser && !user) {
        fetchUser();
      }
    },
  }),
  pure,
);

export const Header = ({
  selectedJob,
  currentRoute,
  headerRedirect,
  submitRedirect,
  clearSelectedJob,
  submitFeedback,
  email,
  user,
  isFetchingUser,
}) => (
  <HeaderWrapper>
    {selectedJob ?
      <div className="row">
        <div className="col-4">
          <HeaderLink to="/search">
            <img src={backIcon} alt="Back" />
          </HeaderLink>
        </div>
        <div className="col-8 textRight">
          {currentRoute.includes("leadcapture") ?
            <HeaderButton
              className="btn btn-default"
              onClick={() => {
                if (email || email.length > 0) {
                  submitFeedback(user, selectedJob, email)
                  clearSelectedJob()
                  submitRedirect()
                } else {
                  alert('Please enter an email.');
                }
              }}
            >
              SUBMIT
            </HeaderButton> :
            <HeaderButton
              className="btn btn-default"
              onClick={() => headerRedirect()}
            >
              HOOK ME UP!
            </HeaderButton>
          }
        </div>
      </div>
      :
      <div className="row">
        <div className="col-6">
          <HeaderLink to="/">
            <img src={homeIcon} alt="Home" />
            {/* <h2 className="quickLoad">
              <span className="secOrange">Quick</span>Load Board
            </h2> */}
          </HeaderLink>
        </div>
        <div className="col-6 textRight">
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
