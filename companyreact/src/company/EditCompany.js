import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditCompany extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        fetch('http://127.0.0.1:8000/company/', {
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: event.target.name.value,
                address: event.target.address.value,
                NIT: event.target.nit.value,
                tel: event.target.tel.value
            })
        })
        .then(res => res.json())
        .then((result) => {
            alert(result);
        },
        (error) =>{
            alert(error)
        })
    }

    render(){
        return(
            <div className = "container"> 
            
            <Modal
                {...this.props}
                size = "lg"
                aria-labelledby = "contained-modal-title-vcenter"
                centered
            >
                <Modal.Header clooseButton>
                    <Modal.Title id="contained-modal-title.vcenter">
                        Editar empresa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm = {15}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Nombre de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "name" required
                                    defaultValue={this.props.name}/>
                                    <Form.Label>Dirección de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "address" required
                                    defaultValue={this.props.address}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>NIT de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "nit" required
                                    disabled
                                    defaultValue={this.props.NIT}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type = "text" name= "tel" required
                                    defaultValue={this.props.tel}/>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Actualizar Empresa
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}