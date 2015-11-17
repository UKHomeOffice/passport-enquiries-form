'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/choose-action'
  },
  '/choose-action': {
    template: 'choose-action',
    fields: [
      'choose-action-complaint',
      'other-information-renew',
      'other-information-passport',
      'other-information-lost-passport',
      'general-enquiries-option'
    ],

  }
};