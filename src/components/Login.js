import React from 'react';
import PropTypes from 'prop-types';
// import { pure } from 'recompose';
import { Redirect } from 'react-router-dom';
import { compose, pure, withState, withHandlers, lifecycle } from 'recompose';
import styled from 'styled-components';

const ContactSpan = styled.span`
    font-size: 20px;
`

const OrangeHr = styled.hr`
    height: 6px;
    background-color: rgb(248,137,0);
    width: 100%;
    border: none !Important;
`

const FormLabel = styled.label`
    font-size: 15px;
    line-height: 20px;
    color: rgb(125,125,125);
`

const FormWrapper = styled.form`
    padding-bottom: 25px;
`

const hoc = compose(
  withState('username', 'updateUsename', ''),
  withState('password', 'updatePassword', ''),
  withHandlers({
    handleUserInput: props => e => {
      props.updateUsename(e.target.value);
      console.log('username: ', e.target.value);
    },
    handlePassInput: props => ev => {
      props.updatePassword(ev.target.value);
      console.log('password: ', ev.target.value);
    }
  }),
  pure,
);

const auth = (u, p) => {
  console.log('u: ', u);
  console.log('p: ', p);
}


const Login = ({ handleUserInput, handlePassInput, username, password }) => (
  <div className="container whiteBG">
      <div className="details">
          <div className="row">
              <div className="col-12">
                  <span className="city">Login</span>
              </div>
              <OrangeHr />
          </div>
          <FormWrapper>
              <div className="form-group">
                  {/* <FormLabel for="name">Username</FormLabel> */}
                  <input type="text"
                    value = {username}
                    onChange={handleUserInput}
                    className="form-control"
                    id="username" aria-describedby="name" placeholder="Username" />
              </div>
              <div className="form-group">
                  {/* <FormLabel for="email">Password</FormLabel> */}
                  <input type="password"
                    value = {password}
                    onChange={handlePassInput}
                    className="form-control"
                    id="password" aria-describedby="password" placeholder="Password" />
              </div>
              <div className="form-group">
                  <input type="button" className="btn btn-lg btn-secondary btn-block" value="Sign in"
                    onClick={auth.bind(username, password)} />
              </div>
          </FormWrapper>
      </div>
  </div>
)

export default hoc(Login)
