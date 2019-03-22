import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormControl, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';

class Home extends Component {
  state = {
    query: '',
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    });
  }

  handleSubmit = () => {
    event.preventDefault();
    this.props.history.push(`/address/${this.state.query}`);
  }

  render() {
    return (
      <Form className="mt-5 search-bar" inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          className="search-text"
          placeholder="Search"
          ref={FormControl => this.search = FormControl}
          onChange={this.handleChange} />
        <Button className="search-button" type="submit"><b>FIND PROJECTS</b></Button>
      </Form>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(Home);
