'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./apply-online'),
  require('./apply-online-options'),
  require('./whose-passport'),
  require('./application-reference'),
  require('./application-within-uk'),
  require('./full-name'),
  require('./email-address'),
  require('./more-information'),
  require('./applicant-full-name')
);
