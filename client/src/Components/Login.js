import React, { Component } from 'react';
import logo from './logo.png'
import './Loginstyle.css'
class Login extends Component {
  
  


    render() { 
        return ( <div className='Login-container'>
        <div className='Login-component'>
     <img style={{height:'150px'}} src ={logo}></img>
     <h1>Welcome to Twitter!</h1> 
     <h4>See what's happening in the world right now</h4>
     <button className="twitter">Sign in with Twitter</button>
     </div>
     </div> 
     );
     }
}
 
export default Login;