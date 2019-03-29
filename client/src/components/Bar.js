import React, { Component } from 'react'
import * as api from '../api';

/**
 * This component was not in the specifications, but I decided to add it
 * for better visual appearance
 */
export default class Bar extends Component {

  state = {
    price: null,
    cap: null
  }

  componentDidMount() {
    api.fetchPrice().then(price => this.setState({price}))
    api.fetchCap().then(cap => {
      const milCap = Math.floor(cap/1000).toLocaleString()
      this.setState({cap: milCap})
    })
  }

  render() {
    return (
      <div className="prices d-flex justify-content-center">
        <p><b>Price: </b>{this.state.price} $</p>
        <p><b>Market Cap: </b>{this.state.cap} $</p>
      </div>
    )
  }
}
