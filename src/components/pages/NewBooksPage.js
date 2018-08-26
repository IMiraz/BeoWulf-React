import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm'

 class NewBooksPage extends Component {
     state = {
  book:null
     }
  render() {
    return (
   <Segment>
<h1>Add New Book Your Collection</h1>
<SearchBookForm/>

   </Segment>
    )
  }
}
export default NewBooksPage
