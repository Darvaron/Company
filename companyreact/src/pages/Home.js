import React, {Component} from 'react';
import {Button, ButtonToolbar, Container} from 'react-bootstrap';
import {AddCompany} from '../company/AddCompany';

/**
 * Clase Home que controla la página principal del aplicativo.
 */

export class Home extends Component{

    constructor(props){
        /**
         * Constructor de la clase
         */
        super(props);
        this.state = {
            addModalShow: true // Ventana que controla la aparación de la ventana emergente para creación de empresas.
        }
    }

    render(){
        /**
         * Genera la renderización de la página principal
         */
        let addMDClose=()=>this.setState({addModalShow: false}); /**
        Función anónima que cambia el estado de la ventana emergente de creación de empresas
        */

        return(
            <div className="wrapper">
                <h1>Menu principal</h1>
                <Container>
                    <ButtonToolbar>
                        <Button variant = "primary" onClick = {()=>this.setState({addModalShow: true})}>
                            Añadir una empresa
                        </Button>

                        <AddCompany show = {this.state.addModalShow}
                            onHide= {addMDClose}></AddCompany>
                    </ButtonToolbar>
                </Container>
            </div>
            )
    }
}