import React, { Component } from 'react'

import { Table } from 'reactstrap'

const QuestionnaireTableElement = ({ question }) => (
    <tr><td>{question.id}</td><td>{question.title}</td><td>{question.description}</td></tr>
)

export class QuestionnaireTable extends Component {
  render() {
    return (
      <Table>
        {this.props.q.map((question) => <QuestionnaireTableElement question={question} /> )}
      </Table>
    )
  }
}

export default QuestionnaireTable