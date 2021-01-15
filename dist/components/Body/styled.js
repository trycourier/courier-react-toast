"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentContainer = exports.Title = exports.BodyText = exports.Icon = exports.AnchorContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: flex-start;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 30px;\n  width: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: black;\n  height: 50px;\n  width: 100%;\n  color: white;\n  display: flex;\n  outline: none;\n  border: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: black;\n  height: 50px;\n  width: 100%;\n  color: white;\n  display: flex;\n  outline: none;\n  border: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var AnchorContainer = _styledComponents["default"].a(_templateObject2());

exports.AnchorContainer = AnchorContainer;

var Icon = _styledComponents["default"].img(_templateObject3());

exports.Icon = Icon;

var BodyText = _styledComponents["default"].div(_templateObject4());

exports.BodyText = BodyText;

var Title = _styledComponents["default"].div(_templateObject5());

exports.Title = Title;

var ContentContainer = _styledComponents["default"].div(_templateObject6());

exports.ContentContainer = ContentContainer;