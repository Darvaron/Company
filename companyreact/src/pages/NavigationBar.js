import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

/**
 * Clase correspondiente a la barra de navegación
 */

export class Navigation extends Component{

    render(){
        /**
         * Renderización de la barra de navegación.
         */
        return(
            <Navbar bg = "dark" expand = "lg">
                <Container>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to = "/">
                        Inicio
                    </NavLink>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to = "/Company">
                        Empresas
                    </NavLink>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}