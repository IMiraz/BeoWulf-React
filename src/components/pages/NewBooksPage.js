import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm'
import BookForm from '../forms/BookForm'

 class NewBooksPage extends Component {
     state = {
  book:null
     };

     onBookSelect = book =>this.setState({ book});

  addBook = () => console.log('h1');
  render() {
    return (
   <Segment>
<h1>Add New Book Your Collection</h1>
<SearchBookForm onBookSelect={this.onBookSelect}/>
{this.state.book && <BookForm submit ={this.addBook} book={this.state.book}/>}

   </Segment>
    )
  }
}
export default NewBooksPage
