import React, { Component } from 'react'
import {Button, Form, MessageHeader, Message} from 'semantic-ui-react'
import validator from 'validator'
import propTypes from 'prop-types'
import InlineError from '../message/InlineError'

class LoginForm  extends Component {
  state= {
    data:{
  email:'',
  password:''
    },
    loading:false,
    errors:{}

  };

onChange = e => this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});

onSubmit = ()=> {
  const errors = this.validate(this.state.data);
  this.setState({errors});
  if(Object.keys(errors).length ===0)
  {
    this.setState({loading:true});

    this.props.submit(this.state.data)
    .catch(err =>this.setState({errors:err.response.data.errors,loading:false}));

  }


};

validate = (data) => {
const errors ={};
if(!validator.isEmail(data.email))errors.email ="invalid email";
if(!data.password) errors.password="can't be blink"
return errors;

}

  render() {
 const {data, errors, loading} =this.state
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
   {errors.global && <Message negative>
<MessageHeader>
SomeThing Went Wrong
</MessageHeader>
<p>{errors.global}</p>

</Message>}


       <Form.Field error={!!errors.email}>
       <label htmlFor="email">Email</label>
       <input type="email"
        id="email"
        name="email"
        placeholder="exmple@gmail.com"
        value={data.email}
        onChange={this.onChange}
/>
{errors.email && <InlineError text={errors.email}/>}
 </Form.Field>
       <Form.Field error={!!errors.password}>
       <label htmlFor="password">Password</label>
       <input type="password"
        id="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={this.onChange}
/>
{errors.password && <InlineError text={errors.password}/>}
       </Form.Field>

      <Button primary>Login</Button>

      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit:propTypes.func.isRequired

};
export default LoginForm