import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static get propTypes() {
    return {
      close: PropTypes.func,
    };
  }
  render() {
    return (
      <div
        style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '64px',
            zIndex: '1',
            backgroundColor: '#D3D3D3',
        }}
      >
        <div
          style={{
            position: 'fixed',
            right: '10px',
        }}
        >
          <button
            style={{
            position: 'fixed',
            right: '0px',
          }}
            onClick={this.props.close}
          >
            Close
          </button>
          {this.state.showLeft}
        </div>
        <h2>
          Left Menu!
        </h2>
      </div>
    );
  }
}

export default LeftMenu;
