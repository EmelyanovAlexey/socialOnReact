"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setTotalUserCountAC = exports.setCurranrPageAC = exports.setUsersAC = exports.unFollowAC = exports.followAC = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = "FOLLOW";
var UN_FOLLOW = "UN_FOLLOW";
var SET_USERS = "SET_USERS";
var SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
var SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
var initialState = {
  users: [],
  pageSize: 100,
  totalUserCount: 1000,
  currentPage: 1
};

var peoplsRebucer = function peoplsRebucer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (p) {
          if (p.id === action.userId) {
            return _objectSpread({}, p, {
              followed: true
            });
          }

          return p;
        })
      });

    case UN_FOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (p) {
          if (p.id === action.userId) {
            return _objectSpread({}, p, {
              followed: false
            });
          }

          return p;
        })
      });

    case SET_USERS:
      return _objectSpread({}, state, {
        users: _toConsumableArray(action.users)
      });
    //...state.users,

    case SET_CURRENT_PAGE:
      return _objectSpread({}, state, {
        currentPage: action.currentPage
      });
    //...state.users,

    case SET_TOTAL_USER_COUNT:
      return _objectSpread({}, state, {
        totalUserCount: action.totalUserCount
      });
    //...state.users,

    default:
      return state;
  }
};

var followAC = function followAC(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

exports.followAC = followAC;

var unFollowAC = function unFollowAC(userId) {
  return {
    type: UN_FOLLOW,
    userId: userId
  };
};

exports.unFollowAC = unFollowAC;

var setUsersAC = function setUsersAC(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsersAC = setUsersAC;

var setCurranrPageAC = function setCurranrPageAC(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurranrPageAC = setCurranrPageAC;

var setTotalUserCountAC = function setTotalUserCountAC(totalUserCount) {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUserCount: totalUserCount
  };
};

exports.setTotalUserCountAC = setTotalUserCountAC;
var _default = peoplsRebucer;
exports["default"] = _default;