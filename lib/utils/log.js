"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var log = function log() {
  var _console;

  var args = [].slice.call(_arguments); // using this instead of spread syntax because it was causing errors
  (_console = console).log.apply(_console, ["[React Albus] "].concat(_toConsumableArray(args)));
};

exports.default = log;