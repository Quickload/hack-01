import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle, withHandlers } from 'recompose';
import { withRouter } from 'react-router'
import styled from 'styled-components';

import App from './App';
import JobCard from '../components/JobCard';
import Loader from '../components/shared/Loader';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';
import nothingHereYet from '../images/nothinghereyet.png';
import {
    getIsFetchingUser,
    getMyJobs,
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
    withRouter,
    connect((state) => ({
        isFetching: getIsFetchingUser(state),
        myJobs: getMyJobs(state),
    }), (dispatch) => ({
        fetchSelectedJob: (id) => dispatch(fetchSelectedJobAsync(id)),
    })),
    withHandlers({
        cardRedirect: ({ history }) => id => () => {
            history.push(`/job/${id}`);
        },
    }),
    lifecycle({
        componentDidMount() {
            const { fetchSelectedJob } = this.props;
            const { id } = this.props.match.params;
            fetchSelectedJob(id);
        },
    }),
    pure,
);

const MyJobs = ({ isFetching, myJobs, cardRedirect }) => (
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
                    {myJobs && myJobs.length ?
                        myJobs.map(job =>
                            <JobCard
                            key={Math.random().toString(36).substring(2, 15)}
                            cardRedirect={cardRedirect(job.jobId)} job={job} />
                        )
                    :
                        <div className="text-center">
                            <Img src={nothingHereYet} alt="nojobs" />
                        </div>
                    }
                </div>
            </div>
        }
    </App>
);

export default hoc(MyJobs)
