import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showIdeas, showDescription } from '../../actions/index';
// import Description from '../Description/index';
import ShowIdeas from '../ShowIdeas';
import { URL } from '../../constants/index';
import '../../../assets/styles/components/App.scss';
// import MessageModal from '../MessageModal/index';

class ConnectedIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    const ReqUrl = `${URL}ideas/api/ideas/`;
    this.props.showIdeas(ReqUrl);
  }

  handleOpen(id) {
    console.log('handleOpen');
    console.log(id);
    this.setState({ id });
    const ReqUrl = `${URL}ideas/api/ideas/${id}/`;
    console.log(ReqUrl);
    this.props.showDescription(ReqUrl);
  }

  render() {
    return (
      <div className="container">
        <Row className="show-grid mainBorder">
          <p id="ideas">Idea<u><strong>S</strong></u>:</p>
          <div className="subBorder">
            <ShowIdeas
              ideas={this.props.ideas}
              id={this.state.id}
              handleOpen={this.handleOpen}
            />
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ideas: state.ideas });

const mapDispatchToProps = dispatch => ({
  showIdeas: url => dispatch(showIdeas(url)),
  showDescription: url => dispatch(showDescription(url)),
  // showPerson: bindActionCreators({ showPerson }, dispatch),
});

const Ideas = connect(mapStateToProps, mapDispatchToProps)(ConnectedIdeas);

ConnectedIdeas.propTypes = {
  showIdeas: PropTypes.func.isRequired,
  showDescription: PropTypes.func.isRequired,
  ideas: PropTypes.array,
};

export default Ideas;
