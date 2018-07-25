import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/App.scss';

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
        className="main_menu"
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
