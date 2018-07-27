import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

class Ideas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open1: false,
      open2: false,
    };
  }
  render() {
    return (
      <div className="container">
        <Row className="show-grid">
          <Col xs={8} md={8}>
            <Button onClick={() => this.setState({ open: !this.state.open })}>
              <p>
                Web-based social seating check-in platform to help air travelers see who
                is on board their flight and use Facebook and Linked in to assign all
                flight seats with one click.
              </p>
            </Button>
            {
            this.state.open &&
            <h3>
            Description
            </h3>
            }
            <br />
            <br />
            <Button onClick={() => this.setState({ open1: !this.state.open1 })}>
              <p>
                A gift recommendation engine to help men foster better relationships through
                periodic and thoughtful romantic gestures models of preference and social trends.
              </p>
            </Button>
            {
            this.state.open1 &&
            <h3>
            Description
            </h3>
            }
            <br />
            <br />
            <Button onClick={() => this.setState({ open2: !this.state.open2 })}>
              <p>
                Developing a cross-platform software to help anyone.
              </p>
            </Button>
            {
            this.state.open2 &&
            <h3>
            Description
            </h3>
             }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Ideas;
