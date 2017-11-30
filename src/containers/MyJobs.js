import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import { getIsFetchingSelectedJob, getSelectedJob } from '../reducers/jobs/selector';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';
// import { fetchUserAsync } from '../actions/doFetchUserAsync';
import nothingHereYet from '../images/nothinghereyet.png';
import {
    // getIsFetchingUser,
    getUser,
} from '../reducers/user/selector';


const TitleSpan = styled.span`
    font-size: 20px;
    color: rgb(248,137,0);
    font-weight: bold;
`

const OrangeHr = styled.hr`
    height: 6px;
    background-color: rgb(248,137,0);
    width: 100%;
    border: none !Important;
`
const Img = styled.img`
    width: 223px;
    height: auto;
    margin: 20px auto 60px;
    display: inline-block;
`

const hoc = compose(
    connect((state) => ({
        isFetching: getIsFetchingSelectedJob(state),
        user: getUser(state),
        selectedJob: getSelectedJob(state),
    }), (dispatch) => ({
        fetchSelectedJob: (id) => dispatch(fetchSelectedJobAsync(id)),
    })),
    lifecycle({
        componentDidMount() {
            const { fetchSelectedJob } = this.props;
            const { id } = this.props.match.params;
            fetchSelectedJob(id);
        },
    }),
    pure,
);

const MyJobs = ({ isFetching, selectedJob }) => (
    <App>
        {isFetching ?
            <Loader />
            :
            <div className="container whiteBG">
                <div className="details">
                    <div className="row">
                        <div className="col-12">
                            <TitleSpan>My Jobs</TitleSpan>
                        </div>
                        <OrangeHr />
                    </div>
                    <div className="text-center">
                        <Img src={nothingHereYet} alt="nojobs" />
                    </div>
                </div>
            </div>
        }
    </App>
);

export default hoc(MyJobs)
