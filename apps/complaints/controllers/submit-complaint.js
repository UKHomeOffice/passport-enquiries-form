'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('../../../lib/base-controller');
var Model = require('../../common/models/email');

var Submit = function Submit() {
    Controller.apply(this, arguments);
};

util.inherits(Submit, Controller);

//function getReports(req) {
//    var sessionData = _.pick(req.sessionModel.toJSON(), _.identity);
//    var data = sessionData.report;
//    return data;
//}

Submit.prototype.saveValues = function saveValues(req, res, callback) {
    var array = [];
    var formValues = req.form.values;
    array.push(formValues);
    req.sessionModel.set('report', array);
    Controller.prototype.saveValues.apply(this, arguments);
};

module.exports = Submit;
