import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, lifecycle } from 'recompose';
import styled from 'styled-components';

import App from './App';
import Loader from '../components/shared/Loader';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { getIsFetchingSelectedJob, getSelectedJob } from '../reducers/jobs/selector';
import { fetchSelectedJobAsync } from '../actions/doFetchSelectedJobAsync';
import {
    getIsSendingEmail,
    getNameFormData,
    getPhoneFormData,
    getEmailFormData,
} from '../reducers/emails/selector';
import { updateFormData } from '../actions/sendEmailsAsync';
// import { fetchUserAsync } from '../actions/doFetchUserAsync';
import {
    // getIsFetchingUser,
    getUser,
} from '../reducers/user/selector';

const LeadCaptureWrapper = styled.div`
margin: ${({ theme }) => theme.spacing.xsmall}px ${({ theme }) => theme.spacing.small}px;
`;

const hoc = compose(
    connect((state) => ({
        isFetching: getIsFetchingSelectedJob(state),
        user: getUser(state),
        selectedJob: getSelectedJob(state),
        isSendingEmail: getIsSendingEmail(state),
        name: getNameFormData(state),
        phone: getPhoneFormData(state),
        email: getEmailFormData(state),
    }), (dispatch) => ({
        fetchSelectedJob: (id) => dispatch(fetchSelectedJobAsync(id)),
        handleFormInputChange: (name, phone, email) => dispatch(updateFormData(name, phone, email)),
    })),
    lifecycle({
        componentDidMount() {
            const { fetchSelectedJob } = this.props;

            console.log(this.props, 'props');
            const { id } = this.props.match.params;
            fetchSelectedJob(id);
        },
    }),
    pure,
);

const LeadCapture = ({ isFetching, selectedJob, isSendingEmail, handleFormInputChange, name, email, phone }) => (
    <App>
        {isFetching || isSendingEmail ?
            <Loader />
            :
            <LeadCaptureWrapper>
                {selectedJob ?
                    <LeadCaptureForm 
                        job={selectedJob} 
                        handleChange={handleFormInputChange}
                        name={name}
                        phone={phone}
                        email={email}
                        /> :
                    <h3>Sorry, job not available at the moment</h3>
                }
            </LeadCaptureWrapper>}
    </App>
);

export default hoc(LeadCapture)