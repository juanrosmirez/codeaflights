import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p style={{marginLeft:'30px',fontWeight:'bold',fontSize:'30px', color:'grey'}}>¡Encontrá pasajes al precio más bajo!</p>
        <Link style={{textDecoration: 'none'}} to={'./search'}>
        <div class="button">
          <p style={{color: 'white',fontWeight:'bold',fontSize:'18px'}}>Buscar vuelos</p>
        </div>
        </Link>
      </div>
    );
  }
}

export default App;

