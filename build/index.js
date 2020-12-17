'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OPACITY = 0.9;
var MENU_COLOURS = {
  RED: 'rgba(255, 215, 215, ' + OPACITY + ')',
  YELLOW: 'rgba(255, 241, 205, ' + OPACITY + ')',
  BLUE: 'rgba(218, 228, 255, ' + OPACITY + ')',
  GREEN: 'rgba(222, 255, 222, ' + OPACITY + ')'
};

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', cursor: this.props.isHover ? 'context-menu' : 'default' } },
        React.createElement(
          'h1',
          null,
          React.createElement(
            'span',
            { className: 'name-fade-in' },
            'Calvin '
          ),
          React.createElement(
            'span',
            { className: 'name-fade-in name-delay' },
            'Nhieu'
          )
        )
      );
    }
  }]);

  return Title;
}(React.Component);

var MenuItem = function (_React$Component2) {
  _inherits(MenuItem, _React$Component2);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this2 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this2.state = { isHover: false };
    return _this2;
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        {
          style: { display: 'flex', flexDirection: 'column', marginBottom: '20px', position: 'relative', animation: 'text-fade-in 0.9s ease-out ' + (1 + this.props.idx * 0.3) + 's both' },
          onMouseEnter: function onMouseEnter() {
            return _this3.setState({ isHover: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.setState({ isHover: false });
          }
        },
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: this.props.link, target: '_blank' },
            this.props.text
          )
        ),
        React.createElement('div', { className: this.state.isHover ? 'hover-menu-item' : '', style: { visibility: this.state.isHover ? 'visible' : 'hidden', width: '45px', height: '9px', background: this.props.colour, position: 'absolute', top: '18px' } })
      );
    }
  }]);

  return MenuItem;
}(React.Component);

var Menu = function (_React$Component3) {
  _inherits(Menu, _React$Component3);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { visibility: this.props.show ? 'visible' : 'hidden', display: 'absolute' } },
        React.createElement(MenuItem, { text: 'About', link: '', colour: MENU_COLOURS.RED, idx: 0 }),
        React.createElement(MenuItem, { text: 'Projects', link: '', colour: MENU_COLOURS.YELLOW, idx: 1 }),
        React.createElement(MenuItem, { text: 'Github', link: 'https://github.com/calvinnhieu', colour: MENU_COLOURS.BLUE, idx: 2 }),
        React.createElement(MenuItem, { text: 'Resume', link: '', colour: MENU_COLOURS.GREEN, idx: 3 })
      );
    }
  }]);

  return Menu;
}(React.Component);

var Main = function (_React$Component4) {
  _inherits(Main, _React$Component4);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this5 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this5.state = {
      showMenu: true,
      isHoverTitle: false
    };
    return _this5;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      return React.createElement(
        'div',
        { style: { width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '125px' } },
          React.createElement(
            'div',
            {
              onClick: function onClick() {
                return _this6.setState({ showMenu: !_this6.state.showMenu });
              },
              onMouseEnter: function onMouseEnter() {
                return _this6.setState({ isHoverTitle: true });
              },
              onMouseLeave: function onMouseLeave() {
                return _this6.setState({ isHoverTitle: false });
              }
            },
            React.createElement(Title, { isHover: this.state.isHoverTitle })
          ),
          React.createElement(Menu, { show: this.state.showMenu })
        )
      );
    }
  }]);

  return Main;
}(React.Component);