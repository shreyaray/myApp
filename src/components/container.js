import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

export class Content extends React.Component{
    render(){
        return(
            <Grid fluid className="content-wrapper">
                <Row className="show-grid">
                    <Col xs={12} md={4} className="content-list">
                        <div className="content-box">ABC</div>
                    </Col>
                    <Col xs={12} md={4} className="content-list">
                        <div className="content-box">ABC</div>
                    </Col>
                    <Col xs={12} md={4} className="content-list">
                        <div className="content-box">ABC</div>
                    </Col>
                </Row>
            </Grid>
        )
    }
} 