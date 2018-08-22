import React, { Component } from 'react';
// import MessageModal from '../MessageModal/index';
import { generateBlock } from '../../services/block';

class Refer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NAME',
    };
    this.createBlock = this.createBlock.bind(this);
  }

  createBlock() {
    const data = {
      initiator: this.state.name,
      initiatorId: 231,
      joini: 'If you had one shot',
      joiniId: 12312,
      referralId: 1232,
    };
    generateBlock(data);
  }

  render() {
    return (
      <div>
        <button onClick={this.createBlock}>
        Close
        </button>
        Refer-Blockchain
      </div>
    );
  }
}

export default Refer;
