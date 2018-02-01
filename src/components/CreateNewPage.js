import React, {Component} from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button
} from 'react-bootstrap'
import UserDataForm from './form.js';

  
  class NewPage extends Component {
	render() {
		return(
		  <form>
			<Row>
			  <Col xs={6}>
				<FormGroup>
					<ControlLabel id="Title">Title</ControlLabel>
					<FormControl type="text" />
				</FormGroup>
			  </Col>
			</Row>
			
			<Row>
			  <Col xs={6}>
			    <FormGroup>
					<ControlLabel id="body">Title</ControlLabel>
					<FormControl componentClass='textarea' />
				</FormGroup>
			  </Col>
			</Row>

			<Row>
			  <Col xs={6}>
				<Button id="submit" >Create ArticlePage</Button>
			  </Col>
			</Row>
		
		  </form>
		)
	}
	handleUpdate(event){
		const target = event.target
		const attribute = target.name
		const value = target.value
		this.setState({[attribute]: value})
	  }
  }	
  
export default NewPage


