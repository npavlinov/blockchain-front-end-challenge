import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Jumbotron, Col, Row } from 'react-bootstrap';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
            <Col lg={9}>
              <h1>Profile</h1>
              <hr />
              <p className="my-2">No. Transactions: <b>{this.props.profile.n_tx}</b></p>
              <hr />
              <p className="my-2">Total Received: <b>{this.props.profile.total_received/100000000} BTC</b></p>
              <hr />
              <p className="my-2">Total Sent: <b>{this.props.profile.total_sent/100000000} BTC</b></p>
              <hr />
              <p className="my-2">Final Balance: <b>{this.props.profile.final_balance/100000000} BTC</b></p>
            </Col>
            <Col lg={3}>
              <img className="mx-auto d-block" src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${this.props.profile.address}`} height={240} width={240} />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
}
