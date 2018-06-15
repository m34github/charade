import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'babel-polyfill';

class Auth extends React.Component {
  async componentDidMount() {
    await this.props.checkAuth();

    if (!this.props.auth.user) {
      const email = 'alice@email.com';
      const password = 'supercalifragilisticexpialidocious';
      await this.props.signIn(email, password);
      this.props.checkAuth();
    }
  }

  render() {
    if (this.props.auth.isLoaded) {
      return (
        this.props.children
      );
    }
    return (
      <article>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      </article>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  signIn: PropTypes.func.isRequired
};

export default Auth;
