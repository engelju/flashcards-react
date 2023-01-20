import React, { Component } from 'react'
import { Container } from 'reactstrap'

import QuestionnaireContainer from './questionnaire/QuestionnaireContainer'

const Header = ({ title, subtitle }) => 
    <div className='jumbotron'>
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
    </div>

const Footer = props => <section>{ props.message }</section>

class App extends Component {
  render() {
    return <Container className="App">
      <Header title='Flashcard Client with React' subtitle='Version 1' />
      <QuestionnaireContainer />
      <Footer message='@ The FHNW Team' />
    </Container>
  }
}

export default App;