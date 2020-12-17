'use strict';

const OPACITY = 0.9
const MENU_COLOURS = {
  RED: `rgba(255, 215, 215, ${OPACITY})`,
  YELLOW: `rgba(255, 241, 205, ${OPACITY})`,
  BLUE: `rgba(218, 228, 255, ${OPACITY})`,
  GREEN: `rgba(222, 255, 222, ${OPACITY})`
}

class Title extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', cursor: this.props.isHover ? 'context-menu' : 'default'}}>
        <h1><span className="name-fade-in">Calvin </span><span className="name-fade-in name-delay">Nhieu</span></h1>
      </div>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isHover: false}
  }

  render() {
    return (
      <div 
        style={{display: 'flex', flexDirection: 'column', marginBottom: '20px', position: 'relative', animation: `text-fade-in 0.9s ease-out ${1 + (this.props.idx * 0.3)}s both`}}
        onMouseEnter={() => this.setState({isHover: true})}
        onMouseLeave={() => this.setState({isHover: false})}
      >
        <p><a href={this.props.link} target="_blank">{this.props.text}</a></p>
        <div className={this.state.isHover ? 'hover-menu-item' : ''}style={{visibility: this.state.isHover ? 'visible' : 'hidden', width: '45px', height: '9px', background: this.props.colour, position: 'absolute', top: '18px'}}/>
      </div>
    )
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div style={{visibility: this.props.show ? 'visible' : 'hidden', display: 'absolute'}}>
	<MenuItem text="About" link="" colour={MENU_COLOURS.RED} idx={0}/>
	<MenuItem text="Projects" link="" colour={MENU_COLOURS.YELLOW} idx={1}/>
	<MenuItem text="Github" link="https://github.com/calvinnhieu" colour={MENU_COLOURS.BLUE} idx={2}/>
	<MenuItem text="Resume" link="" colour={MENU_COLOURS.GREEN} idx={3}/>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: true,
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
