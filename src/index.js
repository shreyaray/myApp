//import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM  from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Grid} from 'react-bootstrap';
//import App from './components/Main';
import {Header} from './components/header';

class AppComponent extends React.Component {  
    render() {
    //   var myList = [
    //     {id:"1",name:"List1",desc:"Desc1"},
    //     {id:"2",name:"List2",desc:"Desc1"},
    //     {id:"3",name:"List3",desc:"Desc1"}
    //   ]
      return (
        <Grid fluid>
          <Header/>
        </Grid>
      );
    }
  }

// Render the main component into the dom
ReactDOM.render(<AppComponent/>, document.getElementById('app'));