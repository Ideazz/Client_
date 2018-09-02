import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { showProfile, showIdeas, showDescription } from '../../actions/index';
import '../../../assets/styles/components/App.scss';
import UserIdeas from '../ShowIdeas';

/* eslint-disable camelcase */

class ConnectedProfile extends Component {
  constructor() {
    super();

    this.state = {
      type: 'profile',
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    this.props.showProfile('http://localhost:8000/ideator/api/ideator/9/');
    // this.props.fetchUserIdeas('http://127.0.0.1:8000/ideas/api/ideas/user/9/');
    this.props.showIdeas('http://127.0.0.1:8000/ideas/api/ideas/user/9/');
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
    const {
      username, state, city,
      country, description,
      current_occupation,
    } = this.props.profile;
    return (
      <div className="greyBackground">
        <div className="container">
          <Row>
            <Col xs={1} md={3} />
            <Col xs={10} md={6}>
              <div className="whiteBackground profileWrapper">
                <hr />
                <span className="glyphicon glyphicon-user profileIcon" />
                <p className="profileName">{username}</p>
                <p className="place">
                  <i className="glyphicon glyphicon-map-marker" />
                  {city}, {state}, {country}
                </p>
                <hr className="hrProfile" />
                <br />
                <p className="desProfile">{description}</p>
                <br />
                <p className="occupation">
                  {current_occupation}
                </p>
                <br />
                <hr />
              </div>
              <UserIdeas
                ideas={this.props.ideas}
                id={this.state.id}
                handleOpen={this.handleOpen}
                type={this.state.type}
              />
            </Col>
            <Col xs={1} md={3} />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  ideas: state.ideas,
});

const mapDispatchToProps = dispatch => ({
  showProfile: url => dispatch(showProfile(url)),
  showIdeas: url => dispatch(showIdeas(url)),
  showDescription: url => dispatch(showDescription(url)),
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfile);

ConnectedProfile.propTypes = {
  showProfile: PropTypes.func.isRequired,
  showIdeas: PropTypes.func.isRequired,
  showDescription: PropTypes.func.isRequired,
  profile: PropTypes.object,
  ideas: PropTypes.array,
};
export default Profile;
