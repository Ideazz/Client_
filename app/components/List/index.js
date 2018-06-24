import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ articles: state.articles });

const ConnectedList = ({ articles }) => (
  <div
    style={{
      paddingTop: '60px',
   }}
  >
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.defaultProps = {
  articles: [],
};

ConnectedList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string),
};

export default List;
