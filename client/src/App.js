import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({
        players: response.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div data-testid="card_display" className="cards">
          {this.state.players.map(players => (
            <PlayerCard key={players.id} players={players} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
