import React, { Component } from 'react';
import {Row, Col, Jumbotron} from 'react-bootstrap';

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
            <p className="hash">{this.props.tx.hash}</p>
          </Col>
          <Col className="text-right">
            <p>{this.state.date}</p>
          </Col>
        </Row>
        <hr className="mb-4" />
      </Jumbotron>
    )
  }
}
