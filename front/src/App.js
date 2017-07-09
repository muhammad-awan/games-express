import React, { Component } from 'react';
import './App.css';
import Article from './components/Article'

class App extends Component {
  render() {
    return (
      <main>
        <Article title='Dude' by='Jack'/>
      </main>
    );
  }
}

export default App;
