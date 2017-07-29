import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header.js'
import Character from './Character.js'
import './App.css'

const Home = () => (
  <div className="App">
    <p className="App-intro">Hello world</p>
    <Link className="btn" to={process.env.PUBLIC_URL + '/character'}>Cliquez ici pour créer un personnage</Link>
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header ></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/character" component={Character}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
