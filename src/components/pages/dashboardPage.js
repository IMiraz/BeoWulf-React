import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import ConfirmEmailMessage from '../message/confirmEmailMessage'
import {allBooksSelector} from '../Reducer/books'
import AddBookCta from '../ctas/addBooksCta'

const DashboardPage =({isConfirmed, books}) => {
  return (
    <div>
  { !isConfirmed && <ConfirmEmailMessage/>}
  {books.length === 0 && <AddBookCta/>}

    </div>
  )
}

DashboardPage.propTypes ={
isConfirmed:propTypes.bool.isRequired,
books:propTypes.arrayOf(propTypes.shape({
  title:propTypes.string.isRequired

}).isRequired).isRequired

}

function mapStateToProps(state){
    return{
isConfirmed: !!state.user.confirmed,
books:allBooksSelector(state)
    };

}

export default connect(mapStateToProps) (DashboardPage);
