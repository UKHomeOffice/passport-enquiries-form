'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/online'
  },
  '/online': {

    template: 'online'

  }
};
