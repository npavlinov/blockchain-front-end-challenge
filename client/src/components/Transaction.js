import React, { Component } from 'react';
import {Row, Col, Jumbotron, Alert} from 'react-bootstrap';

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
              <Row className="addr">
                <Col>
                  <p className="long-text" key={input.tx_index}>{input.prev_out.addr}</p>
                </Col>
                <Col>
                  <p className="value" key={input.tx_index}>{input.prev_out.value/100000000} BTC</p>
                </Col>
              </Row>
            ))}
          </Col>
          <Col>
              asd
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}
