import React from 'react';
import { useState, useEffect } from "react";

class SignUpForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleFormOnChange = (e) => {
    this.setState({
      //dynamic key
      [e.target.name]: e.target.value
      
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleFormOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
          type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleFormOnChange} />  
        </div>
        <button type="submit">Sign up</button>
      </form>
    )
  }
}

export default SignUpForm