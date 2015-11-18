'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/apply-online'
  },
  '/apply-online': {

    template: 'apply-online'

  }
};
