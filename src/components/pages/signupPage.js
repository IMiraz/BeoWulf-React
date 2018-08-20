import React, {Component} from 'react';
import SignupForm from '../forms/SignupForm';
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {signup} from '../actions/users'



class SignupPage extends Component {
    submit = data =>
      this.props.signup(data).then(() => this.props.history.push("/dashborad"));

    render() {
      return (
        <div>
          <h1>SignupForm</h1>
          <SignupForm submit={this.submit} />
        </div>
      );
    }
  }

  SignupPage.propTypes = {
    history: propTypes.shape({
      push: propTypes.func.isRequired
    }).isRequired,
    signup: propTypes.func.isRequired
  };

export default connect(null,{signup}) (SignupPage);
