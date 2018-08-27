import React from "react";
import propTypes from "prop-types";
import { Form, Button, Segment, Grid, GridRow, GridColumn,Image } from "semantic-ui-react";
import InlineError from "../message/InlineError";
import {Link} from 'react-router-dom'

class BookForm extends React.Component {
  state = {
    data: {
goodreadId:this.props.book.goodreadId,
title:this.props.book.title,
authors:this.props.book.authors,
cover:this.props.book.covers[0],
pages:this.props.book.pages
    },
    covers:this.props.book.covers,
    loading: false,
    index:0,
    errors: {}
  };

  componentWillReceiveProps(props) {
      this.setState({
 data:{
    goodreadId:props.book.goodreadId,
    title:props.book.title,
    authors:props.book.authors,
    cover:props.book.covers[0],
    pages:props.book.pages
 },
 covers:props.book.covers,

      })
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onChangeNumber = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: parseInt(e.target.value,10) }
    });


  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Can't be blank";
    if (!data.authors) errors.authors = "Can't be blank";
    if (!data.pages) errors.pages = "Can't be blank";
    return errors;
  };

  changeCover = () => {
const {index, covers} = this.state;
const newIndex = index + 1 >=covers.length? 0 : index +1;
this.setState({ index: newIndex, data:{...this.state.data, cover:covers[newIndex]}})
  }

  render() {
    const { errors, data, loading } = this.state;

    return (
        <Segment>
      <Form onSubmit={this.onSubmit} loading={loading}>

       <Grid columns={2} stackable >
       <GridRow>
<GridColumn>
<Form.Field error={!!errors.title}>
          <label htmlFor="title">Books title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="this is boooks title"
            value={data.title}
            onChange={this.onChange}
          />
          {errors.title && <InlineError text={errors.title} />}
        </Form.Field>
        <Form.Field error={!!errors.authors}>
          <label htmlFor="title">Books authors name</label>
          <input
            type="text"
            id="authors"
            name="authors"
            placeholder="this is boooks authors"
            value={data.authors}
            onChange={this.onChange}
          />
          {errors.authors && <InlineError text={errors.authors} />}
        </Form.Field>

        <Form.Field error={!!errors.pages}>
          <label htmlFor="title">Book Pages</label>
          <input
            type="number"
            id="pages"
            name="page"
            placeholder="this is boook pages"
            value={data.pages}
            onChange={this.onChangeNumber}
          />
          {errors.pages && <InlineError text={errors.pages} />}
        </Form.Field>

</GridColumn>
<GridColumn>
<Image size="small" src={data.cover}/>
{this.state.covers.length>1 && <a role="button"
tabIndex={0}
onClick={this.changeCover} as={Link} >Another Cover
</a>
 }
</GridColumn>
       </GridRow>
       <GridRow>
       <Button primary>Save</Button>
       </GridRow>

        </Grid>
      </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: propTypes.func.isRequired,
  books:propTypes.shape({
goodreadId:propTypes.string.isRequired,
title:propTypes.string.isRequired,
authors:propTypes.string.isRequired,
covers:propTypes.arrayOf(propTypes.string.isRequired).isRequired,
pages:propTypes.number.isRequired
  }).isRequired,

};

export default BookForm;