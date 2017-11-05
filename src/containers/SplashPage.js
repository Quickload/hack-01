import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import SplashLoader from '../components/shared/SplashLoader';
import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { getIsFetchingUser, getUser } from '../reducers/user/selector';

const SplashPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: ${({theme}) => theme.colors.primary.base};
`;

const hoc = compose(
  connect((state) => ({
    isFetchingUser: getIsFetchingUser(state),
    user: getUser(state),
  }), (dispatch) => ({
    fetchUser: () => dispatch(fetchUserAsync()),
  })),
  lifecycle({
    componentDidMount() {
      const {isFetchingUser, user, fetchUser} = this.props;
      if (!isFetchingUser && !user) {
        fetchUser();
      }
    },
  }),
  pure,
);

const SplashPage = ({isFetchingUser, user}) => (
  <div>
    <Helmet>
      <title>Splash Page</title>
    </Helmet>

    {isFetchingUser && !user ?
        <SplashPageWrapper>
          <SplashLoader />
        </SplashPageWrapper>
      :
        <Redirect to="/search" />
      }
  </div>
);

export default hoc(SplashPage)
