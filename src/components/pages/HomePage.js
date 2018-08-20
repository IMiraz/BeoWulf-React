import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import { Button } from 'semantic-ui-react';
import * as actions from '../actions/auth'

const HomePage = ({isAuthenticated, logout}) =>
<div>
<h1>home page</h1>

 {isAuthenticated?<Button onClick={ () => logout()}>Logout</Button>:<div><Link to="/login">Login</Link>OR <Link to="/signup">SignUp</Link></div>
 }
</div>

HomePage.propTypes = {
 isAuthenticated:propTypes.bool.isRequired,
 logout:propTypes.func.isRequired
};


function mapStateToProps(state) {
    return{
    isAuthenticated:!!state.user.token
    }

}


export default connect(mapStateToProps, {logout:actions.logout}) (HomePage);
