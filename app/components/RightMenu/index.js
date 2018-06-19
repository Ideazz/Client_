import React, { Component } from 'react';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */

class RightMenu extends Component {
  constructor() {
    super();

    this.state = {
      showRight: true,
    };
    this.handleMenuRight = this.handleMenuRight.bind(this);
  }

  handleMenuRight() {
    this.setState({
      showRight: !this.state.showRight,
    });
  }
  render() {
    return (
      <div
        style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '300px',
            top: '64px',
            backgroundColor: '#D3D3D3',
        }}
      >
        <div>
          <button
            onClick={this.handleMenuRight}
          >
            Close
          </button>
          {this.state.showRight ?
              null :
              null
            }
          <h2>
            Right Menu!
          </h2>
        </div>
      </div>
    );
  }
}

export default RightMenu;
