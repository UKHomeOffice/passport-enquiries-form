'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./apply-online'),
  require('./apply-online-options'),
  require('./whose-passport'),
  require('./application-reference')
);
