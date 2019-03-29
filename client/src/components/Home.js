import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormControl, Button, Container} from 'react-bootstrap';
import * as api from '../api';
import Address from './Address';

export default class Home extends Component {
  state = {
    query: '',
    results: null,
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    });
  }

  handleSubmit = () => {
    event.preventDefault();
    api.fetchAddress(this.state.query).then(results =>
    this.setState({
      results
    }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Form className="my-5 search-bar" inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            className="search-text"
            placeholder="Search"
            ref={FormControl => this.search = FormControl}
            onChange={this.handleChange} />
          <Button className="search-button" type="submit"><b>SEARCH</b></Button>
        </Form>
        { this.state.results &&
          <Address results={this.state.results} />
        }
      </Container>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
}
