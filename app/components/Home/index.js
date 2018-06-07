import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleMenu}>This is</button>
        <Menu isOpen={this.state.show}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
    );
  }
}

export default Home;
