import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddCompany extends Component{

    /*
        Clase correspondiente a la creación de una nueva empresa.
    */

    constructor(props){
        /*
        Constructor de la clase
        */
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){/*
        Evento encargado de la conexión con la API para la creación de un nuevo registro
        */
        event.preventDefault();

        fetch('http://127.0.0.1:8000/company/', {
            method: 'POST',
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
        /*
        Render del formulario, este es de la clase Modal, por lo que se presenta como una ventana emergente
         */
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
                        Añadir empresa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm = {15}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Nombre de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "name" required placeholder="Nombre"/>
                                    <Form.Label>Dirección de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "address" required/>
                                    <Form.Label>NIT de la empresa</Form.Label>
                                    <Form.Control type = "text" name= "nit" required placeholder="XXXXXXXXXX"/>
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type = "text" name= "tel" required placeholder="XXXXXXX"/>&nbsp;
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Añadir Empresa
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