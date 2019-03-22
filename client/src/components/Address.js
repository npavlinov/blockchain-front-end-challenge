import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

export default class Address extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    this.setState({
      results: api.fetchAddress(this.props.match.params)
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state.results)}
      </div>
    )
  }
}

Address.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      address: PropTypes.string.isRequired,
    }),
  })
}
