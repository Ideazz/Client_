import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeftMenu from '../LeftMenu/index';
import RightMenu from '../RightMenu/index';
import '../../../assets/styles/components/App.scss';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showLeft: false,
      showRight: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.close = this.close.bind(this);
  }

  handleMenu(position) {
    if (position === 'left') {
      this.setState({
        showLeft: !this.state.showLeft,
        showRight: false,
      });
    } else {
      this.setState({
        showLeft: false,
        showRight: !this.state.showRight,
      });
    }
  }
  close() {
    this.setState({
      showRight: false,
      showLeft: false,
    });
  }
  render() {
    return (
      <div>
        <div>
          <button
            className="left_button"
            onClick={() => this.handleMenu('left')}
          >
            Left
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundLeft"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {
              this.state.showLeft ?
                <LeftMenu
                  close={this.close}
                  left={this.state.showLeft}
                /> :
              null
            }
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <button
            className="right_button"
            onClick={() => this.handleMenu('right')}
          >
            Right
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundRight"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {
              this.state.showRight ?
                <RightMenu
                  close={this.close}
                  right={this.state.showRight}
                /> :
                null
            }
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Amet aliquam id diam maecenas ultricies. Adipiscing bibendum est
             integer quis. Nisi scelerisque eu ultrices vitae auctor. Sit amet
              eget dolor. Tempus egestas sed sed risus pretium. Elit scelerisqu
               mauris pellentesque pulvinar pellentesque habitant morbi tristiqu
               e senectus. Porttitor leo a diam sollicitudin tempor id eu. Ut sem
                nulla pharetra diam sit amet. Tristique senectus et netus et male
                suada fames ac. Erat velit scelerisque in dictum non consectetur
                a erat nam. Feugiat nisl pretium fusce id velit ut tortor pretium
                 viverra. Feugiat in fermentum posuere urna. Enim neque volutpat
                 ac tincidunt vitae semper quis lectus nulla. Cursus turpis massa
                  tincidunt dui ut ornare. Risus ultricies tristique nulla aliquet
                  enim tortor. Diam quis enim lobortis scelerisque. Quisque egestas
                   diam in arcu Erat velit scelerisque in dictum non consectetur
                   a erat nam. Feugiat nisl pretium fusce id velit ut tortor pretium
                    viverra. Feugiat in fermentum posuere urna. Enim neque volutpat
                    ac tincidunt vitae semper quis lectus nulla. Cursus turpis massa
                     tincidunt dui ut ornare. Risus ultricies tristique nulla aliquet
                     enim tortor. Diam quis enim lobortis scelerisque. Quisque egestas
                      diam in arcu
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
