import React, { Component } from 'react'
import QuestionnaireTable from './QuestionnaireTable'

class QuestionnaireContainer extends Component {
  render() {
    return <QuestionnaireTable q={this.props.q} />
  }
}


export default QuestionnaireContainer