import React from 'react'
import { Menu, Dropdown,Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import  gravatarURL from 'gravatar-url'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../actions/auth'

const TopNavigation = ({ user, logout }) => {
  return (
    <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">dashboard</Menu.Item>
    <Menu.Menu position="right">
    <Dropdown trigger={<Image avatar src={gravatarURL(user.email)}/>}>
    <Dropdown.Menu>

       <Dropdown.Item onClick ={ () => logout()}>
 Logout
 </Dropdown.Item>
    </Dropdown.Menu>

    </Dropdown>


    </Menu.Menu>

    </Menu>
  )
}

TopNavigation.propTypes = {
  user:propTypes.shape({
email:propTypes.string.isRequired

  }).isRequired,
  logout:propTypes.func.isRequired

};

function mapStateToProps(state) {
  return {
    user:state.user
  }

}

export default connect(mapStateToProps,{logout:actions.logout}) (TopNavigation);
