
import React, { Component } from 'react';
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import IndexPage from './components/indexPage';
import './App.css';
import Article from './components/articlePage'

class App extends Component {
	constructor(props){
	  super(props)
	 	 this.state = {
	      article: [
	        {
	          key: 1,
	          name: 'Times',
	          about: 'sports and more...'
	        },
	        {
	          id: 2,
	          name: 'LA News',
	          about: 'cats & dogs'
	        }

	      ]
	    }
	  }
	  render() {
	    return (
				<Grid>
	      <div className="App">
	        <header className="Page-header">
	          <h1 className="App-title">Welcome to WiKi•MåX</h1>
	        </header>			  
	      </div>
				<div className="IndexPage"/>

			
			</Grid>
	    );
	  }

}

export default App;
