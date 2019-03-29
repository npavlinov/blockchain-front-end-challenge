import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Transaction from './Transaction';

const url = 'wss://ws.blockchain.info/inv';

export default class Address extends Component {

    state = {
      transactions: this.props.results.txs,
      loading: true
    }

    btws = new WebSocket(url)

    componentDidMount() {

      // this.setState({loading: false})
      setTimeout(() => this.setState({loading:false}), 1)

      this.btws.onopen = () => {
        console.log(`connected to: ${this.props.results.address}`);
        this.btws.send(JSON.stringify({"op":"addr_sub", "addr":`${this.props.results.address}`}))
      }

      this.btws.onmessage = txs => {
        const transaction = JSON.parse(txs.data);
        this.setState(state => ({
          transactions: [transaction, ...state.transactions]
        }))
      }

      this.btws.onclose = () => {
        console.log('disconnected');
      }
    }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div>
            <Profile profile={this.props.results} />
            {this.state.transactions.map(
              (tx) => <Transaction key={tx.tx_index} tx={tx} />
            )}
          </div>
        )}
      </div>
    )
  }
}

Address.propTypes = {
  results: PropTypes.object.isRequired,
}
