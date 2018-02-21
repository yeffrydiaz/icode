import React, { Component } from 'react';
import Navbar from './Navbar';
import CodeBoxes from './CodeBoxes';
import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />        
        <CodeBoxes />
        <iframe 
          className="result" 
          title="results">
        </iframe>
      </div>
    );
  }
}
