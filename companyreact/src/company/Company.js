import React, {Component} from 'react';
import {Table, Container} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

import { EditCompany } from './EditCompany';

/**
 * Clase principal del modelo, contiene los métodos para interactuar con la API por medio de GET, PUT y DELETE.
 */

export class Company extends Component{

    constructor(props){
        /**
         * Constructor de la clase
         */
        super(props);
        this.state = {
            companys: [],
            editModalShow: false // Bandera que controla la aparición de la ventana de edición.
        }
    }

    deleteCom(NIT){
        /**
         * Interacción con la API para DELETE
         */
        if(window.confirm("¿Desea eliminar definitivamente?")){
            fetch('http://127.0.0.1:8000/company/'+NIT, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    refreshList(){
        /**
         * Actualiza la lista de empresas por medio de la interacción con la API
         */
        fetch('http://127.0.0.1:8000/company/')
        .then(response => response.json())
        .then(data =>{
            this.setState({companys: data});
        });
    }

    componentDidMount(){
        /**
         * Invoca la actualización de la lista de empresas al actualizarse la página
         */
        this.refreshList();
    }  

    componentDidUpdate(){
        /**
         * Invoca la actualización de la lista de empresas al actualizarse la página
         */
        this.refreshList();
    }

    render(){
        /**
         * Renderización de la lista de empresas junto con sus sus respectivos botones para edición y eliminación
         */
        const {companys, name, address, NIT, tel} = this.state;
        let editModalClose=()=>this.setState({editModalShow: false}) /**
        Función anónima que altera el estado de la bandera que controla el despliegue de la ventana de edición
        */
        return(
            <div>
            <Table className = "mt-4" striped bordered hover size = "sm">
                <thead>
                    <td>Empresa</td>
                    <td>Dirección</td>
                    <td>NIT</td>
                    <td>Teléfono</td>
                    <td>Opciones</td>
                </thead>
                <tbody>
                    {companys.map(comp =>
                        <tr key ={comp.NIT}>
                            <td>{comp.name}</td>
                            <td>{comp.address}</td>
                            <td>{comp.NIT}</td>
                            <td>{comp.tel}</td>
                            <ButtonToolbar>
                            <Container>
                            <Button className="mr-2" variant="info"
                            onClick={()=>this.setState({editModalShow: true, NIT: comp.NIT, name: comp.name, address: comp.address, tel: comp.tel})}
                            >
                                Editar
                            </Button>

                            <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteCom(comp.NIT)}
                            >
                                Eliminar
                            </Button>

                            <EditCompany show={this.state.editModalShow}
                            onHide={editModalClose}
                            NIT={NIT}
                            name={name}
                            address={address}
                            tel={tel}
                            />
                            </Container>
                            </ButtonToolbar>
                        </tr>
                        )}
                </tbody>
            </Table>
            </div>
        )
    }
}