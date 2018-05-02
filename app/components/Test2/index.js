import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ persons: state.persons[0] });

const ConnectedTestt = ({ persons }) => (
  <ul className="list-group list-group-flush">
    {persons.map(person => (<li>{person.email}</li>))}
  </ul>
);

const Testt = connect(mapStateToProps)(ConnectedTestt);

ConnectedTestt.defaultProps = {
  persons: [],
};

ConnectedTestt.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object),
};

export default Testt;
