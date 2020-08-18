"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = function log() {
  var _console;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["[React Albus] "].concat(args));
};

exports.default = log;