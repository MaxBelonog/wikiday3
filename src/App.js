
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  Grid,
  PageHeader,
} from 'react-bootstrap'
import IndexPage from './components/indexPage';
import './App.css';
import Article from './components/articlePage'


class App extends Component {
	constructor(props){
	  super(props)
	 	 this.state = {
	      articles: [
	        {
	          id: 1,
	          title: 'Times',
	          body: 'sports and more...'
	        },
	        {
	          id: 2,
	          title: 'LA News',
	          body: 'cats & dogs'
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
					<IndexPage articles={this.state.articles}/>	  
	      </div>
				<div className="IndexPage"/>

			
			</Grid>

	    );
	  }

}


export default App;
