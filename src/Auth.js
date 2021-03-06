import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class Auth extends React.Component {
  render () {
    const jwtFromStorage = window.localStorage.getItem('jwt');
    const jwtFromQuery = new URLSearchParams(this.props.location.search).get('jwt');
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    // If we have JWT in storage, it's all we need.
    if (jwtFromStorage) {
      this.props.history.replace(from);
      return (null);
    }

    // If we get JWT from query, we have to save it to storage.
    if (jwtFromQuery) {
      window.localStorage.setItem('jwt', jwtFromQuery);
      this.props.history.replace(from);
      return (null);
    }

    // If we haven't JWT, we have to call API and after redirect we get it in query.
    // TODO should be client responsibility.
    const redirectUrl = Axios.getUri({
      method: 'GET',
      url: 'http://localhost:4000/auth',
      params: {
        client_id: '46c0d030e380a77c20f1',
        redirect_url: window.location.href
      }
    });

    window.location = redirectUrl;

    return (
      <main className='container mt-3'>
        <h1>Logging...</h1>
      </main>
    );
  }
}

export const AuthWithRouter = withRouter(Auth);
