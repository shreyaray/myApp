import React from 'react';

import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';

export class Content extends React.Component{
    constructor(props){
        // to excute the parent  constructor use super
        super(); 
        // creating properties inside of this component
        this.state = {
            clickCount: 0
        }

    }
    getCount(){
        // this method allow to change the state and whenever call the method react js will rerender the UI
        this.setState({
            clickCount: this.state.clickCount +1
        });  
    }
    render(){
        return(
            <Grid fluid className="content-wrapper">
                <Row className="show-grid">
                    {this.props.demoData.map((data,i) => <Col xs={12} md={4} className="content-list" key={i}><div className="content-box"><h3>{data.section}</h3>{data.data}</div></Col>)}
                    {/* <Col xs={12} md={4} className="content-list">
                        <div className="content-box">ABC</div>
                    </Col>
                    <Col xs={12} md={4} className="content-list">
                        <div className="content-box">ABC</div>
                    </Col> */}
                </Row>
                <Jumbotron>
                    <p>button click count {this.state.clickCount}</p>
                    {/* Two way to  write event in React*/}
                    <Button bsStyle="primary" onClick={this.getCount.bind(this)}>Click count</Button>
                    {/* <Button bsStyle="primary" onClick={() => this.getCount()}>Click count</Button> */}
                </Jumbotron>
            </Grid>
        )
    }
} 

// ProprTypes enfrce that your component will accept correct type of data
Content.propTypes = {
    demoData: React.PropTypes.array
};