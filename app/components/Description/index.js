import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/App.scss';

const mapStateToProps = state => ({ data: state.description });

const ConnectedDescription = ({ data }) => (
  <div key={data.id}>
    <p className="description">
      {data.description}
    </p>
    <br />
    <blockquote>
      <p className="expectation">Looking for someone to guide me along the product launch.</p>
    </blockquote>
  </div>
);

const Description = connect(mapStateToProps)(ConnectedDescription);

ConnectedDescription.defaultProps = {
  data: {},
};

ConnectedDescription.propTypes = {
  data: PropTypes.object,
};

export default Description;
