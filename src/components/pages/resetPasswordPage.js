import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import { validateToken, resetPassword } from "../actions/auth";
import ResetPaaswordForm from '../forms/ResetPasswordForm'

class resetPasswordPage extends React.Component {
  state = {
    loading:true,
    success: false

  }
  componentDidMount(){
 this.props.validateToken(this.props.match.params.token)
 .then(()=> this.setState({ loading:false, success:true}))
 .catch(()=> this.setState({loading:false, success:false}) )
  }
  submit = data =>
  this.props
    .resetPassword(data)
    .then(() => this.props.history.push("/login"));
  render() {
    const { loading, success} = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
 {loading &&  <Message>Loading....</Message>}
 {!loading && success && <ResetPaaswordForm submit={this.submit} token={token}/>}
{!loading && !success && <Message>Invalid Link</Message>}

      </div>
    );
  }
}

resetPasswordPage.propTypes = {
validateToken:propTypes.func.isRequired,
match:propTypes.shape({
params:propTypes.shape({
token:propTypes.string.isRequired
}).isRequired

}).isRequired,

history: propTypes.shape({
  push: propTypes.func.isRequired
}).isRequired
};




export default connect(null, { validateToken, resetPassword })(resetPasswordPage);
