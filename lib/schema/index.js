
/*!
 * Module exports.
 */

exports.Number = require('./number');

exports.String = require('./string');

exports.Boolean = require('./boolean');

exports.Buffer = require('./buffer');

exports.Date = require('./date');

exports.ObjectId = require('./objectid');

exports.Mixed = require('./mixed');

exports.Array = require('./array');

exports.DocumentArray = require('./documentarray');

exports.Embedded = require('./embedded');

// alias

exports.Oid = exports.ObjectId;
exports.Object = exports.Mixed;
exports.Bool = exports.Boolean;