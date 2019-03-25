import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

export default class Address extends Component {

  

  state = {
    address: this.props.match.params.address,
    results: []
  }

  async componentDidMount() {
    await api.fetchAddress(this.state.address)
      .then(results => this.setState({
        results
      }))
      .catch(err => console.log(err));
    await console.log(this.state.results);
  }

  render() {
    return (
      <div>
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
