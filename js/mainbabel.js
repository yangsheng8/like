"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Thumb = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(count) {
        _classCallCheck(this, PraiseButton);

        this.count = count;
    }
    /*大于10执行样式*/


    _createClass(PraiseButton, [{
        key: "max10",
        value: function max10() {
            document.getElementById("palm").style.backgroundColor = '#f0f0f0';
            document.getElementById("finger4").style.backgroundColor = '#f0f0f0';
            document.getElementById("finger1").style.backgroundColor = '#f0f0f0';
        }
        /*小于10执行样式*/

    }, {
        key: "min10",
        value: function min10() {
            document.getElementById("palm").style.backgroundColor = '#f9f12a';
            document.getElementById("finger4").style.backgroundColor = '#f9f12a';
            document.getElementById("finger1").style.backgroundColor = '#f9f12a';
        }
    }]);

    return PraiseButton;
}();

var Thumb = exports.Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(x) {
        _classCallCheck(this, Thumb);

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, x));

        _this.count = x;
        return _this;
    }

    _createClass(Thumb, [{
        key: "setCount",
        value: function setCount(count) {
            if (count >= 10) {
                this.count = 0;
                _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), "max10", this).call(this);
            } else {
                this.count = count + 1;
                _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), "min10", this).call(this);
            }
        }
    }, {
        key: "getCount",
        value: function getCount() {
            return this.count;
        }
    }]);

    return Thumb;
}(PraiseButton);
