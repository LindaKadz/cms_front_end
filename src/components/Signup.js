import React, { Component } from 'react'
import 'whatwg-fetch';

class SignUp extends Component {
  constructor(props) {
   super(props);
   this.state = {
     firstname: '', lastname: '', username: '', email: '', password: '', confirmpassword: ''
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 validateForm() {
    return (
      this.state.password.length > 8 &&
      this.state.password === this.state.confirmpassword
    );
  }


 handleChange(event) {
   this.setState({ [event.target.name]: event.target.value });
 }

 handleSubmit(event) {
   event.preventDefault();
   let data = {
       'first_name': this.state.firstname, 'last_name': this.state.lastname, 'email': this.state.email,
       'nickname': this.state.username, 'password': this.state.password, 'password_confirmation': this.state.confirmpassword,
      }

   let headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type, Authorization, Content-Length, X-Requested-With',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
      'Accept': 'application/json',
      "Content-Type": "application/json",
   }
   const { history } = this.props;
console.log(data)
    fetch('http://localhost:3001/api/v1/auth', {
      credentials: 'same-origin',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)})
      .then(function(data) {
      console.log('request succeeded with JSON response', data)
      if(data.status === 200){
        console.log("user signed in!")
        history.push('/')
      }
    }).catch(function(error) {
      console.log('request failed', error)
    })
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         First Name:
          <input type="text" name='firstname' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <label>
         Last Name:
         <input type="text" name='lastname' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <label>
         Username:
         <input type="text" name='username' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <label>
         Email:
         <input type="text" name='email' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <label>
         Password:
         <input type="text" name='password' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <label>
         Confirm Password:
         <input type="text" name='confirmpassword' onChange={this.handleChange} />
       </label>
       <br />
       <br />

       <input type="submit" value="Submit" />
     </form>
   );
 }
}

export default SignUp
