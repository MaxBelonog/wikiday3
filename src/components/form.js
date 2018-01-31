import React, {Component} from 'react';


<FormControl
  type="text"
  name="title"
  onChange={this.handleChange.bind(this)}
  value={this.state.form.name}
/>
handleChange(event){
  const formState = Object.assign({}, this.state.form)
  formState[event.target.name] = event.target.value
  this.setState({form: formState})
}
