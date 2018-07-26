import React from 'react';
import { Navbar} from 'react-bootstrap';

export class Header extends React.Component{
    render(){
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Dashbosrd</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}