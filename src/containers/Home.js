import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import QuickLoader from '../components/shared/QuickLoader';
import { fetchUserAsync } from '../actions/doFetchUserAsync';
import { getIsFetchingUser, getUser } from '../reducers/user/selector';

const HomeWrapper = styled.div`
  text-align: center;
  margin: ${({theme}) => theme.spacing.large}px 0;
`;

const ErrorMessage = styled.div`
  font-weight: bold;
  color: ${({theme}) => theme.colors.danger.base};
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

const Home = ({isFetchingUser, user}) => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>

    {isFetchingUser ?
      <QuickLoader />
    :
      <HomeWrapper>
        {user ?
          <h1>Hello, {user.name}</h1>
        :
          <ErrorMessage>
            Sorry, we're having trouble getting your user info.
          </ErrorMessage>
      }
      </HomeWrapper>
    }
  </div>
)

export default hoc(Home)
