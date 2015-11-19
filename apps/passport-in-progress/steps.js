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


};
