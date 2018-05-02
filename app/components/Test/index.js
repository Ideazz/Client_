import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { showPerson } from '../../actions/index';
import Testt from '../Test2/index';

class ConnectedTest extends Component {
  constructor() {
    super();

    this.state = {
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event) {
    console.log(event);
    this.props.showPerson('http://localhost:8000/api/');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleButton}>This is a button</button>
        <Testt />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showPerson: url => dispatch(showPerson(url)),
  // showPerson: bindActionCreators({ showPerson }, dispatch),
});

const Test = connect(null, mapDispatchToProps)(ConnectedTest);

ConnectedTest.propTypes = {
  showPerson: PropTypes.func.isRequired,
};
export default Test;
