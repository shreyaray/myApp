import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

export class Content extends React.Component{
    render(){
        return(
            <Grid fluid className="content-wrapper">
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        ABC
                    </Col>
                    <Col xs={12} md={4}>
                        XYZ
                    </Col>
                    <Col xs={12} md={4}>
                        PQR
                    </Col>
                </Row>
            </Grid>
        )
    }
} 