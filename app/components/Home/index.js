import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeftMenu from '../LeftMenu/index';
import RightMenu from '../RightMenu/index';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showLeft: false,
      showRight: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleMenuRight = this.handleMenuRight.bind(this);
    this.closeRightMenu = this.closeRightMenu.bind(this);
  }

  handleMenu() {
    this.setState({
      showLeft: !this.state.showLeft,
      showRight: false,
    });
  }
  handleMenuRight() {
    this.setState({
      showLeft: false,
      showRight: !this.state.showRight,
    });
  }
  closeRightMenu() {
    this.setState({
      showRight: false,
      showLeft: false,
    });
  }
  render() {
    return (
      <div
        style={{
          paddingTop: '65px',
          backgroundColor: '#1E90FF',
        }}
      >
        <div>
          <button
            style={{
            position: 'fixed',
            width: '50px',
            height: '30px',
            left: '30px',
            top: '300px',
        }}
            onClick={this.handleMenu}
          >
            Left
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundLeft"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.showLeft ?
              <LeftMenu
                close={this.closeRightMenu}
                left={this.state.showLeft}
              /> :
              null
            }
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <button
            style={{
              position: 'fixed',
              width: '50px',
              height: '30px',
              right: '30px',
              top: '300px',
        }}
            onClick={this.handleMenuRight}
          >
            Right
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundRight"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.showRight ?
              <RightMenu
                close={this.closeRightMenu}
                right={this.state.showRight}
              /> :
                null
            }
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <h1>
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
                   diam in arcu
Enim praesent elementum facilisis leo vel. Elementum integer enim neque volutpat ac
. Id porta nibh venenatis cras sed felis eget velit. Leo vel orci porta non. Mattis
enim ut tellus elementum sagittis vitae et leo. Leo vel fringilla est ullamcorper.
Purus gravida quis blandit turpis cursus in. Faucibus purus in massa tempor nec feug
iat nisl pretium fusce. Praesent tristique magna sit amet purus gravida quis blandit.
 In hendrerit gravida rutrum quisque. Sed sed risus pretium quam vulputate dignissim
 suspendisse in. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Cras
  semper auctor neque vitae. Varius sit amet mattis vulputate enim nulla aliquet porttitor.
A iaculis at erat pellentesque adipiscing. Tincidunt dui ut ornare lectus. Sagittis
eu volutpat odio facilisis mauris. Eget est lorem ipsum dolor. Sagittis nisl rhoncus
mattis rhoncus urna neque viverra. Bibendum at varius vel pharetra. Sed ullamcorper
orbi tincidunt ornare massa eget egestas purus viverra. Penatibus et magnis dis part
rient montes nascetur ridiculus. Pretium vulputate sapien nec sagittis aliquam males
ada bibendum arcu vitae. Nulla posuere sollicitudin aliquam ultrices. Aenean et tortor
at risus. Nunc faucibus a pellentesque sit. Id eu nisl nunc mi ipsum faucibus vitae al
quet nec. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales
Suspendisse ultrices gravida dictum fusce ut placerat. Sed lectus vestibulum ma
tis ullamcorper velit. Tortor posuere ac ut consequat semper viverra nam libero
justo. Amet massa vitae tortor condimentum lacinia quis vel eros. Dui faucibus
n ornare quam viverra orci. Elit sed vulputate mi sit amet mauris. Faucibus et m
lestie ac feugiat sed lectus vestibulum. Non tellus orci ac auctor augue mauris
ugue. Convallis aenean et tortor at risus viverra adipiscing. Scelerisque eleife
 donec pretium vulputate. Augue lacus viverra vitae congue eu consequat. Urna nec
 tincidunt praesent semper. Tellus orci ac auctor augue. Ultrices sagittis orci a
 scelerisque purus semper eget duis at. Diam in arcu cursus euismod quis viverra
 ibh cras pulvinar. Nam aliquam sem et tortor consequat id porta. Eu consequat ac f
 elis donec et odio. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
