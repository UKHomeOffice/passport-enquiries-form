'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('../../../lib/base-controller');
var Logger = require('../../../lib/logger')

var Action = function Action() {
  Controller.apply(this, arguments);
};

util.inherits(Action, Controller);

Action.prototype.saveValues = function saveValues(req, res, callback) {
  var formValue = req.form.values;
  var chosenAction = formValue['choose-action-complaint-radio'];

  if (chosenAction !== "" || chosenAction !== null) {
    res.redirect('/' + chosenAction);
  } else {
    Logger.error('The chosen action has not been selected.')
  }
};

module.exports = Action;
