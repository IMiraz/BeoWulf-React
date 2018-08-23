import React, {Component} from 'react';
import LoginForm from '../forms/LoginForm';
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import {Link} from 'react-router-dom'


class LoginPage extends Component {
    submit = data =>
      this.props.login(data).then(() => this.props.history.push("/dashborad"));

    render() {
      return (
        <div>
          <h1>Login page</h1>
          <LoginForm submit={this.submit} />
          <Link to="/forgot_password">Forgot your password?</Link>
        </div>

      );
    }
  }

  LoginPage.propTypes = {
    history: propTypes.shape({
      push: propTypes.func.isRequired
    }).isRequired,
    login: propTypes.func.isRequired
  };

export default connect(null,{login}) (LoginPage);
