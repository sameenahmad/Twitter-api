import React, { Component } from 'react';
function Logout(props) {
    return (
      <button style ={btnStyle} onClick={props.onClick}>
        Logout
      </button>
    );
    }
const btnStyle={
  backgroundColor:'#04A9F4',
  color:'white',
  outline:'none',
  padding:'0.5rem 0.5rem',
  fontSize:'1.2rem',
  font: 'Nunito',
  fontWeight: 'bold',
  border:'none',
  fontFamily:'Nunito',
}

    export default Logout;

