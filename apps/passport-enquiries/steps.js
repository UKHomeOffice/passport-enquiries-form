'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/choose-action'
  },
  '/choose-action': {
    controller: require('./controllers/choose-action'),
    template: 'choose-action',
    fields: [
      'choose-action-complaint-radio',
      'other-information-renew',
      'other-information-passport',
      'other-information-lost-passport',
      'general-enquiries-option'
    ],
    next: '/hello'

  }
};
