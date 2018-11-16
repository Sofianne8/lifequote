import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Table from 'react-bootstrap/lib/Table'

import {Step} from '../enums'
import {Genders, HealthCodes, ProductCodes, States} from '../lookups'
import {formatDollars} from '../utils'

let getPaymentRows = payments =>
  payments.reduce((rows, {term, annualPayment, monthlyPayment}) => {
    rows.header.push(<th>{term} year</th>)
    rows.annual.push(<td>{annualPayment.toFixed(2)}</td>)
    rows.monthly.push(<td>{monthlyPayment.toFixed(2)}</td>)
    return rows
  }, {
    header: [<th></th>],
    annual: [<th>Annual</th>],
    monthly: [<th>Monthly</th>]
  })

let QuoteInfo = React.createClass({
  render() {
    let {changeStep, generalInfo, payments} = this.props
    let rows = getPaymentRows(payments)
    return <div>
      <div className="panel-body">

      </div>
      <div className="panel-footer">
        <Row>
          <Col sm={12}>
            <Button className="pull-left" onClick={() => changeStep(Step.GENERAL_INFO)}>
              Edit
            </Button>
            <Button bsStyle="primary" className="pull-right" onClick={() => changeStep(Step.SEND_QUOTE)}>
              Forward to Agent
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  }
})

export default QuoteInfo
