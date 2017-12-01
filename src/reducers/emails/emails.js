import {
    FORM_DATA,
    SENDING_EMAIL,
    EMAIL_ERROR,
    EMAIL_SENT,
} from '../../actions/sendEmailsAsync';

const initialState = {
    isSendingEmail: false,
    error: null,
    name: null,
    phone: null,
    email: null,
};

export const emails = (state = initialState, action) => {
    switch (action.type) {
        case FORM_DATA:
            return {
                ...state,
                name: action.data.name,
                phone: action.data.phone,
                email: action.data.email
            }
        case SENDING_EMAIL:
            return {
                ...state,
                isSendingEmail: true,
                error: null,
            }
        case EMAIL_ERROR:
            return {
                ...state,
                isSendingEmail: false,
                error: action.error,
            }
        case EMAIL_SENT:
            return {
                ...state,
                isSendingEmail: false,
                error: null,
            }
        default:
            return state
    }
};

export default emails;
