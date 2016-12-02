'use strict';

/* eslint-env browser */

/*!
 * Module dependencies.
 */

/**
 * Returns the Document constructor for the current context
 *
 * @api private
 */
module.exports = function() {
  return require('./browserDocument.js');
};
