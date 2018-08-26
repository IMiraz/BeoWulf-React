import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react';

export default class SearchBookForm extends Component
{
   state = {
       query:'',
       loading:false,
       options:[
{
key:1,
value:1,
text:"first books"
},
{
    key:2,
    value:2,
    text:"react  books"
    },
],
books:{}
}
onSearchChange =(e,data) => {
    clearTimeout(this.timer);
this.setState({
query:data
});
this.timer =setTimeout(this.fetchOption, 1000);
}
fetchOption = () =>
{
    if(!this.state.query) return;
 this.setState({loading:true})
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
>

</Dropdown>

</Form>
      </div>
    )
  }
}
