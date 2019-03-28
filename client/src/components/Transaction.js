import React, { Component } from 'react';
import {Row, Col, Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Transaction extends Component {

  state = {
    date: null
  }

  componentDidMount() {
    const txEpoch = this.props.tx.time * 1000;
    const d = new Date(txEpoch);
    console.log(d)
    this.setState({
      date: d.toLocaleString()
    })
  }

  render() {
    return (
      <Jumbotron>
        <Row>
          <Col>
            <p className="long-text">{this.props.tx.hash}</p>
          </Col>
          <Col className="text-right">
            <p>{this.state.date}</p>
          </Col>
        </Row>
        <hr className="mb-4"></hr>
        <Row>
          <Col>
            {this.props.tx.inputs.map(input => (
              <Row key={input.tx_index} className="addr">
                <Col sm={9}>
                  <p className="long-text">{input.prev_out.addr}</p>
                </Col>
                <Col sm={3}>
                  <p className="value long-text">{input.prev_out.value/100000000} BTC</p>
                </Col>
              </Row>
            ))}
          </Col>
          <i className="fas fa-arrow-right align-self-center"></i>
          <Col>
            {this.props.tx.out.map(out => (
              <Row key={out.tx_index} className="addr">
              <Col sm={9}>
                <p className="long-text">{out.addr}</p>
              </Col>
              <Col sm={3}>
                <p className="value long-text">{out.value/100000000} BTC</p>
              </Col>
            </Row>
            ))}
          </Col>
        </Row>
        <hr className="mb-3"></hr>
        <p className="btc-value">{this.props.tx.out.reduce((acc, out) => acc + out.value, 0)/100000000}</p>
      </Jumbotron>
    )
  }
}

Transaction.propTypes = {
  tx: PropTypes.array.isRequired,
}
