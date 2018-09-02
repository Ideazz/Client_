import React from 'react';
import { Col } from 'react-bootstrap';
import Description from '../Description/index';
import '../../../assets/styles/components/App.scss';

/* eslint react/prop-types: 0 */

const ShowIdeas = props => (
  <div>
    {
    props.ideas.map(idea => (
      <Col xs={8} md={10} key={idea.id}>
        <div className="ideas" aria-hidden onClick={() => props.handleOpen(idea.id)} role="button">
          <p className="idea_pitch"> {idea.subject}</p>
          {
            props.type === 'ideas' &&
            <p className="userName"> {idea.username} | <cite>Entrepreneur</cite></p>
          }
        </div>
        {
            props.id === idea.id &&
            <div className="animated fadeIn descriptionWrapper" key={idea.id}>
              <br />
              {
                <Description />
            }
            </div>
            }
        <hr className="dotted" />
      </Col>
      ))
  }
  </div>
);

export default ShowIdeas;
