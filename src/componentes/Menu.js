// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// const Menu = (props) => {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Container>
//                 <Navbar.Brand href="#home">React Demo</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Inicio</Nav.Link>
//                         <Nav.Link href="#link">Nosotros</Nav.Link>
//                         <NavDropdown title="Tic Tac Toe" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Gato</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Cruz</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Tablero</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Historia</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Menu;

import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render(){
        return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">Tic tac toe!</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
            <Nav>
                <NavDropdown
                title="Menu!"
                >
                <NavDropdown.Item href="https://www.exploratorium.edu/brain_explorer/tictactoe.html">Reglas del Tic Tac Toe</NavDropdown.Item>
                <NavDropdown.Item href="https://www.wikihow.com/Win-at-Tic-Tac-Toe">Como siempre ganar en Tic-Tac-Toe</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        )
        // return <Dropdown>
        // <Dropdown.Toggle variant="success" id="dropdown-basic">
        //     Dropdown Button
        // </Dropdown.Toggle>

        // <Dropdown.Menu>
        //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        // </Dropdown.Menu>
        // </Dropdown>
    }
}

export default Menu;