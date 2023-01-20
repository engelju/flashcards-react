import React, {Component} from 'react'
import { Col, Row } from 'reactstrap'
import _ from 'lodash'

import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import QuestionnaireTable from './QuestionnaireTable'

const DEFAULT_ID = 0

class QuestionnaireContainer extends Component {
  constructor(props) {
      super(props)
      this.state = { qs: this.props.qs }
  }

  id = qs => _.get(_.maxBy(qs, 'id'), 'id', DEFAULT_ID) + 1

  onCreate = (questionnaire) => {
    this.setState({ qs: _.concat(this.state.qs, { id: this.id(this.state.qs), ...questionnaire }) })
  } 

  render() {
      return <div>
          <Row>
              <Col><h3>Questionnaires</h3></Col>
              <Col><QuestionnaireCreateDialog onCreate={ this.onCreate } /></Col>
          </Row>
          <QuestionnaireTable qs={ this.state.qs } />
      </div>
  }
}

QuestionnaireContainer.defaultProps = {
    qs:[
      {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
      {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
      {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
      {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
      {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
    ]
  }

export default QuestionnaireContainer