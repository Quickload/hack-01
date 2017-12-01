import { createSelector } from 'reselect';

export const getEmailsState = state => state && state.emails;

export const getIsSendingEmail = createSelector(
    getEmailsState,
    emails => (emails && emails.isSendingEmail) || false
);

export const getNameFormData = createSelector(
    getEmailsState,
    emails => (emails && emails.name) || ''
);

export const getPhoneFormData = createSelector(
    getEmailsState,
    emails => (emails && emails.phone) || ''
);

export const getEmailFormData = createSelector(
    getEmailsState,
    emails => (emails && emails.email) || ''
);