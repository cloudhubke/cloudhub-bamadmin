"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("cloudhub-components/dist/mui/core");

var _shadows = _interopRequireDefault(require("./shadows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getTheme = function getTheme(_ref) {
  var mainFontFamily = _ref.mainFontFamily,
      primaryColors = _ref.primaryColors,
      secondaryColors = _ref.secondaryColors,
      tertiaryColors = _ref.tertiaryColors,
      textColors = _ref.textColors,
      backgroundColors = _ref.backgroundColors;
  return (0, _core.createMuiTheme)({
    palette: {
      primary: _objectSpread({
        main: '#3c44b1'
      }, primaryColors),
      grey: {
        300: '#fefefe',
        A100: '#f8f9ff'
      },
      secondary: _objectSpread({
        main: '#4191ff'
      }, secondaryColors),
      error: {
        main: '#f83245'
      },
      success: {
        main: '#1bc943'
      },
      info: {
        main: '#11c5db'
      },
      warning: {
        main: '#f4772e'
      },
      helpers: {
        primary: '#3c44b1',
        main: 'rgba(25, 46, 91, .035)'
      },
      contrastThreshold: 3,
      tonalOffset: 0.1
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1100,
        xl: 1381
      }
    },
    shape: {
      borderRadius: '0.2rem'
    },
    overrides: {
      MuiTab: {
        root: {
          fontWeight: 'bold'
        }
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: '#070919',
          padding: '8px 16px',
          fontSize: '13px'
        },
        arrow: {
          color: '#070919'
        }
      }
    },
    typography: {
      fontFamily: ["".concat(mainFontFamily), 'Heebo', 'sans-serif'].join(','),
      htmlFontSize: 16,
      fontSize: 14
    },
    shadows: _shadows.default
  });
};

var _default = getTheme;
exports.default = _default;