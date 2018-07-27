import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

export class Header extends React.Component{
    render(){
        return(
            <Navbar inverse className="navStyle">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Dashbosrd</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Category
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Login
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}