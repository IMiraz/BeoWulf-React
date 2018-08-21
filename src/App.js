import React from 'react';
import {Route} from 'react-router-dom';
import propTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/dashboardPage';
import SignupPage from './components/pages/signupPage';
import ConfirmationPage from "./components/pages/ConfirmationPage";
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


const App = ({location}) =>
<div className="ui container">
<Route location={location}  path="/" exact component={HomePage}/>
    <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage}
    />
<UserRoute location={location}  path ="/dashborad" exact component ={DashboardPage}/>
<GuestRoute location={location}  path ="/login" exact component ={LoginPage}/>
<GuestRoute location={location}  path ="/signup" exact component ={SignupPage}/>
</div>

App.propTypes = {
    location:propTypes.shape({
pathname:propTypes.string.isRequired
    }).isRequired

}

export default App;
