import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    this.setState({
      showLeft: !this.state.showLeft,
      showRight: false,
    });
  }
  handleMenuRight() {
    this.setState({
      showRight: !this.state.showRight,
      showLeft: false,
    });
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
          <ReactCSSTransitionGroup
            transitionName="backgroundLeft"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.showLeft ?
              <LeftMenu /> :
              null
            }
          </ReactCSSTransitionGroup>
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
          <ReactCSSTransitionGroup
            transitionName="backgroundRight"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.showRight ?
              <RightMenu /> :
            null
          }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Home;
