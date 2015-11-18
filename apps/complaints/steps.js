'use strict';

module.exports = {
    '/': {
        template: 'complaints',
        controller: require('./controllers/submit-complaint'),
        fields: ['full-name-input',
            'ref-number-input',
            'email-input',
            'complaint-details-input'],
        next: '/confirmation',
        backLink: '/passport-enquiries'
    },
    '/confirmation': {
        controller: require('./controllers/confirmation'),
        template: 'confirmation'
    }
};
