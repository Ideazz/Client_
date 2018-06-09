import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import LeftMenu from '../LeftMenu/index';
import RightMenu from '../RightMenu/index';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showLeft: false,
      showRight: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleMenuRight = this.handleMenuRight.bind(this);
  }

  handleMenu() {
    console.log('This is show left');
    console.log(this.state.showLeft);
    this.setState({ showLeft: !this.state.showLeft });
  }
  handleMenuRight() {
    console.log('This is show Right');
    console.log(this.state.showRight);
    this.setState({ showRight: !this.state.showRight });
  }
  render() {
    return (
      <div>
        <div>
          <button
            style={{
            position: 'fixed',
            width: '50px',
            height: '30px',
            left: '30px',
            top: '300px',
        }}
            onClick={this.handleMenu}
          >
            Left
          </button>
          <Menu isOpen={this.state.showLeft}>
            <LeftMenu />
          </Menu>
        </div>
        <div>
          <button
            style={{
            position: 'fixed',
            width: '50px',
            height: '30px',
            right: '30px',
            top: '300px',
        }}
            onClick={this.handleMenuRight}
          >
            Right
          </button>
          <Menu
            right
            isOpen={this.state.showRight}
          >
            <RightMenu />
          </Menu>
        </div>
      </div>
    );
  }
}

export default Home;
