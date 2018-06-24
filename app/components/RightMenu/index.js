import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */

class RightMenu extends Component {
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
            backgroundColor: '#D3D3D3',
        }}
      >
        <div>
          <button
            onClick={this.props.close}
          >
            Close
          </button>
          {this.state.showRight}
          <h2>
            Right Menu!
          </h2>
        </div>
      </div>
    );
  }
}

export default RightMenu;
