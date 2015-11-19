'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/apply-online'
  },
  '/apply-online': {
    template: 'apply-online',
    fields: [
      'apply-online-radio'
    ],
    next: '/apply-online-options',
    backLink: '../passport-enquiries/choose-action'
  },
  '/apply-online-options': {
    template: 'apply-online-options',
    fields: [
      'apply-online-options-radio'
    ],
    next: '/whose-passport',
    backLink: 'apply-online'
  },
  '/whose-passport': {
    template: 'whose-passport',
    fields: [
      'whose-passport-radio'
    ],
    next: '/application-reference',
    backLink: 'apply-online-options'
  },
  '/application-reference': {
    template: 'application-reference',
    fields: [
      'application-reference-number',
      'application-reference-radio'
    ],
    next: '/application-within-uk',
    backLink: 'whose-passport'
  },
  '/application-within-uk': {
    template: 'application-within-uk',
    fields: [
      'application-within-uk-radio'
    ],
    next: '/full-name',
    backLink: 'application-reference'
  },
  '/full-name': {
    template: 'full-name',
    fields: [
      'full-name-text'
    ],
    next: '/email-address',
    backLink: 'application-within-uk'
  },
  '/email-address': {
    template: 'email-address',
    fields: [
      'email-address-text'
    ],
    next: '/more-information',
    backLink: 'full-name'
  },
  '/applicant-full-name': {
    template: 'applicant-full-name',
    fields: [
      'applicant-full-name-text'
    ],
    next: '/full-address',
    backLink: 'application-within-uk'
  }
};
