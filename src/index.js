import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM  from 'react-dom';

import {Grid} from 'react-bootstrap';

import './styles/app.css';
//import App from './components/Main';
import {Header} from './components/header';
import {Content} from './components/container';

class AppComponent extends React.Component {  
    render() {
      var demoData=[
        { section:"Section1",data:"SEction 1 Data"},
        { section:"Section2",data:"SEction 2 Data"},
        { section:"Section3",data:"SEction 3 Data"}
      ]
      return (
        <Grid fluid className="noPadding">
          <Header><a href="#home">Dashbosrd</a></Header>
          <Content demoData={demoData}/>
        </Grid>
      );
    }
  }

// Render the main component into the dom
ReactDOM.render(<AppComponent/>, document.getElementById('app'));
