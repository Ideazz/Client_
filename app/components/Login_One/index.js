import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class LoginOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };

    this.signup = this.signup.bind(this);
  }
  signup(res, type) {
    let postData;
    if (type === 'facebook' && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url,
      };
    }

    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa,
      };
    }

    if (postData) {
      console.log(postData);
      this.setState({ redirect: true });
    }
    // if (postData) {
    //   PostData('signup', postData).then((result) => {
    //     const responseJson = result;
    //     sessionStorage.setItem('userData', JSON.stringify(responseJson));
    //     this.setState({ redirect: true });
    //   });
    // } else {
    //   console.log('no PostData');
    // }
  }
  render() {
    const responseFacebook = (response) => {
      console.log('facebook console');
      console.log(response);
      this.signup(response, 'facebook');
    };

    const responseGoogle = (response) => {
      console.log('google console');
      console.log(response);
      this.signup(response, 'google');
    };
    return (
      <div
        style={{
        backgroundColor: '#1E90FF',
      }}
      >
        <button>
          Login for Ideators
        </button>
        <GoogleLogin
          clientId="715928774774-j5c5mh0nuej9c92tlm8m5b8k7eajcqdh.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br /><br />
        <FacebookLogin
          appId="2141821986082305"
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
        />
        {
          this.state.redirect &&
          <h1>redirect</h1>
        }
      </div>
    );
  }
}

export default LoginOne;
