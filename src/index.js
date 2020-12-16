'use strict';

class Title extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={this.props.isHover ? {textDecoration: 'underline rgba(221,221,221,0.3)', textDecorationThickness: '7px', cursor: 'context-menu'} : {}}>Calvin Nhieu</h1>
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{visibility: this.props.show ? 'visible' : 'hidden', display: 'absolute'}}>
        <p><a href="" target="_blank">About</a></p>
        <p><a href="" target="_blank">Projects</a></p>
        <p><a href="https://github.com/calvinnhieu" target="_blank">GitHub</a></p>
        <p><a href="" target="_blank">Resume</a></p>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      isHoverTitle: false
    }
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '125px'}}>
          <div
            onClick={() => this.setState({showMenu: !this.state.showMenu})}
            onMouseEnter={() => this.setState({isHoverTitle: true})}
            onMouseLeave={() => this.setState({isHoverTitle: false})}
          >
            <Title isHover={this.state.isHoverTitle}/>
          </div>
	  <Menu show={this.state.showMenu}/>
        </div>
      </div>
    );
  }
}
