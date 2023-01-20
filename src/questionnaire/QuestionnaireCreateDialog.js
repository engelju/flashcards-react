import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import _ from 'lodash'

class QuestionnaireCreateDialog extends Component {
    constructor(props) {
        super(props)
        // achtung: title und description müssen den namen von den defaultProps matchen:
        this.state = { showModal: false, title: '', description: '' }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    } 

    create = () => {
        this.props.onCreate(_.pick(this.state, ['title', 'description']))
        this.close()
    }

    close = () => this.setState({ showModal: false, title: '', desc: '' })
    open = () => this.setState({ showModal: true })

    render() {
        return (
            <div>
                <Button color="success" onClick={ this.open } className="float-right">Create</Button>
                <Modal isOpen={ this.state.showModal } toggle={ this.close } size="lg" autoFocus={ false }>
                <ModalHeader toggle={ this.close } >Show Questionnaire</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label md={ 2 } for="formTitle">Title</Label>
                            <Col md={ 10 }>
                                <Input type="text" id="formTitle" name='title' value={ this.state.title } onChange={ this.change } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={ 2 } for="formDescription">Description</Label>
                            <Col md={ 10 }>
                                <Input type="text" id="formDescription" name='description' value={ this.state.desc } onChange={ this.change } />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col className="clearfix" style={{ padding: '.2rem' }}>
                                <Button className="float-right" color="secondary" 
                                    onClick={ this.create }>Save</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default QuestionnaireCreateDialog;