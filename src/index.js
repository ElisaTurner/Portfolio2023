import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Layout/Header/Navbar';
 
ReactDOM.render(
 <> <Navbar />
    <App />  
    </> ,
  document.getElementById('root'));
  
export default App;
 
