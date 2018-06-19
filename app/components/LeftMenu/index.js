import React, { } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LeftMenu = () => (
  <div
    style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            right: '300px',
            top: '75px',
            backgroundColor: '#D3D3D3',
        }}
  >
    <ReactCSSTransitionGroup
      transitionName="backgroundLeft"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <h2>
      Left Menu!
      </h2>
    </ReactCSSTransitionGroup>
  </div>
);

export default LeftMenu;
