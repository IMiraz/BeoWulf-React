import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from "../forms/ForgotPasswordForm"
import {resetPasswordRequest} from "../actions/auth"
import propTypes from 'prop-types'

 class ForgotPasswordPage extends Component {
 state = {
      success:false
 }

 submit = data => this.props.resetPasswordRequest(data)
 .then( () => this.setState({success:true}))

  render() {
    return (
      <div>
{this.state.success ? (<Message>Email has been sent</Message>):
(<ForgotPasswordForm submit={this.submit}/>
    )}
      </div>
    )
  }
}
ForgotPasswordPage.propTypes = {
    resetPasswordRequest:propTypes.func.isRequired

};

export default connect(null, {resetPasswordRequest}) (ForgotPasswordPage)