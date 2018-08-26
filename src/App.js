import React from 'react';
import {Route} from 'react-router-dom';
import propTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/dashboardPage';
import SignupPage from './components/pages/signupPage';
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/forgotpasswordPage";
import ResetPasswordPage from "./components/pages/resetPasswordPage";
import {connect} from 'react-redux';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/Topnavigation';
import NewBooksPage from './components/pages/NewBooksPage'


const App = ({location, isAuthenticated}) =>
<div className="ui container">
{isAuthenticated && <TopNavigation/>}
<Route location={location}  path="/" exact component={HomePage}/>
 <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage}/>
<UserRoute location={location}  path ="/dashborad" exact component ={DashboardPage}/>
<UserRoute location={location}  path ="/books/new" exact component ={NewBooksPage}/>
<GuestRoute location={location}  path ="/login" exact component ={LoginPage}/>
<GuestRoute location={location}  path ="/forgot_password" exact component ={ForgotPasswordPage}/>
<GuestRoute location={location}  path ="/reset_password/:token" exact component ={ResetPasswordPage}/>
<GuestRoute location={location}  path ="/signup" exact component ={SignupPage}/>
</div>

App.propTypes = {
    location:propTypes.shape({
pathname:propTypes.string.isRequired
    }).isRequired,
    isAuthenticated:propTypes.bool.isRequired

};

function mapStateToProps(state){
    return{
    isAuthenticated: !!state.user.email
    }

}

export default connect(mapStateToProps)(App);
