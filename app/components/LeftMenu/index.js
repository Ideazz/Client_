import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/App.scss';

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
        className="main_menu"
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
