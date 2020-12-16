'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        { style: { display: 'flex', flexDirection: 'column' } },
        React.createElement(
          'h1',
          { style: this.props.isHover ? { textDecoration: 'underline rgba(221,221,221,0.3)', textDecorationThickness: '7px', cursor: 'context-menu' } : {} },
          'Calvin Nhieu'
        )
      );
    }
  }]);

  return Title;
}(React.Component);

var Menu = function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { visibility: this.props.show ? 'visible' : 'hidden', display: 'absolute' } },
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: '', target: '_blank' },
            'About'
          )
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: '', target: '_blank' },
            'Projects'
          )
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: 'https://github.com/calvinnhieu', target: '_blank' },
            'GitHub'
          )
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: '', target: '_blank' },
            'Resume'
          )
        )
      );
    }
  }]);

  return Menu;
}(React.Component);

var Main = function (_React$Component3) {
  _inherits(Main, _React$Component3);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this3 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this3.state = {
      showMenu: false,
      isHoverTitle: false
    };
    return _this3;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

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
                return _this4.setState({ showMenu: !_this4.state.showMenu });
              },
              onMouseEnter: function onMouseEnter() {
                return _this4.setState({ isHoverTitle: true });
              },
              onMouseLeave: function onMouseLeave() {
                return _this4.setState({ isHoverTitle: false });
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