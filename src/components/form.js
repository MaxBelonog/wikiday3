import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      hometown: ''
    }
  }

  handleUpdate(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  handleSubmit(event){
    this.props.userDataUpdated(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <br />
          <h3>Text Input</h3>
          <input 
            name='title' 
            value={this.state.title} 
            onChange={this.handleUpdate.bind(this)} 
          />

          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default UserDataForm;