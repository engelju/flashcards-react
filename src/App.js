import React, { Component } from 'react'
import { Container } from 'reactstrap'

import QuestionnaireContainer from './questionnaire/QuestionnaireContainer'

const Header = ({ title, subtitle }) => (
  <div className="jumbotron"><h1>{title}</h1><h3>{subtitle}</h3></div>
)

const Footer = ({ message, q }) => (
  <p>{message} with {q.length} questionnaires</p>
)

class App extends Component {
  render() {
    return <Container className="App">
      <Header title='Flashcard Client with React' subtitle='Version 1' />
      <QuestionnaireContainer q={this.props.questionnaires}/>
      <Footer message='@ The FHNW Team' q={this.props.questionnaires} />
    </Container>
  }
}

App.defaultProps = {
  questionnaires:[
    {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
    {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
    {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
    {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
    {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
  ]
}

export default App;
