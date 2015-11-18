'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('../../../lib/base-controller');
var Model = require('../../common/models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

util.inherits(Submit, Controller);

function getReports(req) {
  var sessionData = _.pick(req.sessionModel.toJSON(), _.identity);
  var data = sessionData.report;
  return data;
}

Submit.prototype.getValues = function locals(req) {
  /* get Form Name */
  var formName = req.query.formName;

  if (formName !== undefined) {
    req.sessionModel.set('formName', formName);
  } else {
    // Log form name is not defined
  }
  var data = getReports(req);
  _.each(data, function addIndex(d, i) {
    d.index = i;
  });
  Controller.prototype.getValues.apply(this, arguments);
};

Submit.prototype.saveValues = function saveValues(req, res, callback) {
console.log('--------------debug 1-----------');
  res.redirect('../passport-in-progress');


};

module.exports = Submit;
