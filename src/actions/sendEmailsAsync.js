import axios from 'axios';

export const FORM_DATA = 'FORM_DATA';
export const SENDING_EMAIL = 'SENDING_EMAIL';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const EMAIL_SENT = 'EMAIL_SENT';

export const updateFormData = (name, phone, email) => ({
    type: FORM_DATA,
    data: { name, phone, email }
})

export const isSendingEmail = () => ({
    type: SENDING_EMAIL,
});

export const failedToSendEmail = (error) => ({
    type: EMAIL_ERROR,
    error
});

export const emailSentSuccessfully = () => ({
    type: EMAIL_SENT,
});

export const sendEmailAsync = (user, job, email) => dispatch => {
    dispatch(isSendingEmail());
    console.log(user, job, email, 'send email');
    axios.post('https://us-central1-quickload-f4a75.cloudfunctions.net/feedbackEmail', {
        params: { user, job, email }
    })
        .then(function (response) {
            console.log(response.data, 'email sent');
            dispatch(emailSentSuccessfully());
        })
        .catch(function (error) {
            console.log(error);
            dispatch(failedToSendEmail(error));
        });
};
