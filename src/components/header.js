import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

export const Header = (props) =>{
    return(
        <Navbar inverse className="navStyle">
            <Navbar.Header>
                {/* props.children render any html which has passed externally from parent component */}
                <Navbar.Brand>
                    {props.children} 
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