import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import ConfirmEmailMessage from '../message/confirmEmailMessage'

const DashboardPage =({isConfirmed}) => {
  return (
    <div>
  { !isConfirmed && <ConfirmEmailMessage/>}

    </div>
  )
}

DashboardPage.propTypes ={
isConfirmed:propTypes.bool.isRequired
}

function mapStateToProps(state){
    return{
isConfirmed: !!state.user.confirmed
    }

}

export default connect(mapStateToProps) (DashboardPage);
