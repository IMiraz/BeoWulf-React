import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react';
import propTypes from 'prop-types'

import axios from 'axios'

export default class SearchBookForm extends Component
{
   state = {
       query:'',
       loading:false,
       options:[],
books:{}
}
onSearchChange =(e,data) => {
    clearTimeout(this.timer);
this.setState({
query:data
});
this.timer =setTimeout(this.fetchOption, 1000);
};
onChange = (e, data) => {
this.setState({ query:data.value});
this.props.onBookSelect(this.state.books[data.value])
}


fetchOption = () =>
{
    if(!this.state.query) return;
 this.setState({loading:true});
axios.get(`/api/books/search?q=${this.state.query}`)
.then(res =>res.data.books)
.then(books => {
  const options =[];
  const booksHash={};
books.forEach(book => {
 booksHash[book.goodreadId]= book;
options.push({
  key:book.goodreadId,
  value:book.goodreadId,
text:book.title

});

});
this.setState({loading:false, options, books:booksHash})
})
}


  render() {
    return (
      <div>
<Form>
<Dropdown
search
fluid
placeholder="Search for a book by title"
value={this.state.query}
onSearchChange={this.onSearchChange}
options={this.state.options}
loading={this.state.loading}
onChange={this.onChange}
>

</Dropdown>

</Form>
      </div>
    )
  }
}

SearchBookForm.propTypes= {
  onBookSelect:propTypes.func.isRequired
}