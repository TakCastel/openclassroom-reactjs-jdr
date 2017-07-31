import React, { Component } from 'react'
import { randomDice } from './Services.js'
import './App.css'

class Character extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.createCharacter = this.createCharacter.bind(this);
    this.state = {
      name: '', //Nom du personnage
      tmpName: '', //Nom temporaire
      strenght: 10, //Force du personnage
      health: 10 //Santé du personnage
    }
  }

  // Sauvegarde temporaire de l'entrée saisie dans l'input
  handleChange(event) {
    this.setState({tmpName :event.target.value})
  }

  // Transfert de la valeur temporaire à la valeur finale
  submitForm(event) {
    event.preventDefault()
    this.setState({ name: this.state.tmpName})
  }

  // Génération aléatoire des caractéristiques
  createCharacter(event) {
    event.preventDefault()
    const strenght = randomDice(7,12)
    const health = randomDice(14,24)

    this.setState({strenght: strenght})
    this.setState({health: health})

    // localStorage.setItem("name", this.state.name)
    // localStorage.setItem("strenght", strenght)
    // localStorage.setItem("health", health)
  }

  render() {
    return (
      <div className="App">
        <form
          className="App-form">
          <div className="App-form-group">
            <label htmlFor="name">Nom du personnage :</label>
            <input 
              htmlFor="name"
              id="name" 
              type="text" 
              value={this.state.tmpName}
              onChange={this.handleChange}
              placeholder="John Doe"
              />
            <button
              className="App-btn"
              onClick={this.submitForm}>
              Nommer
            </button>
          </div>
          <p>Attribuer de nouvelles caractéristiques :</p>
          <button
            className="App-btn"
            onClick={this.createCharacter}>
            Générer
          </button>
        </form> 
        <p className="App-intro">
          Bonjour {this.state.name}, 
          vous avez {this.state.strenght} points de Force 
          et {this.state.health} points de Santé.
        </p>
      </div>
    );
  }

}

export default Character;