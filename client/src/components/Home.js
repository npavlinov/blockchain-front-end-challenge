import React, { Component } from 'react'
import { Form, FormControl, Button, Container } from 'react-bootstrap'
import * as api from '../api'
import Address from './Address'
import Bar from './Bar'

export default class Home extends Component {
  state = {
    query: '',
    results: null,
    error: false,
    loading: false,
  }

  // get the search value
  handleChange = () => {
    this.setState({
      query: this.search.value,
    })
  }

  // call Blockchain API and handle any errors that might occur
  handleSubmit = () => {
    event.preventDefault()
    this.setState({
      loading: true,
    })
    api
      .fetchAddress(this.state.query)
      .then(results =>
        this.setState({
          results,
          error: false,
          loading: false,
        })
      )
      .catch(err => {
        console.log(err)
        this.setState({ error: true, loading: false })
      })
  }

  /*
   * The component will display a top bar with prices, a search bar and after that
   * the resulting address
   */
  render() {
    return (
      <div>
        <Bar />
        <Container>
          <Form
            className="my-5 mx-auto search-bar"
            inline
            onSubmit={this.handleSubmit}
          >
            <FormControl
              type="text"
              className="search-text"
              placeholder="Type address..."
              ref={FormControl => (this.search = FormControl)}
              onChange={this.handleChange}
            />
            <Button className="search-button" type="submit">
              <b>SEARCH</b>
            </Button>
          </Form>
          {this.state.error ? (
            <h5 className="text-center text-danger">Wrong Address!</h5>
          ) : this.state.loading ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            this.state.results && <Address results={this.state.results} />
          )}
        </Container>
      </div>
    )
  }
}
