import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormControl, Button, Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as api from '../api';
import Transaction from './Transaction'

class Home extends Component {
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
    // this.props.history.push(`/address/${this.state.query}`);
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
          this.state.results.txs.map(
            (tx) => <Transaction key={tx.tx_index} tx={tx} />
          )
        }
      </Container>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
}

// <h1 key={txs.tx_index}>{txs.tx_index}</h1>

export default withRouter(Home);
