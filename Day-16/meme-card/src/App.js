import React, { Component } from "react";
import logo from "./logo.svg";
import Card from "./component/Card/card.component";
import ChessBoard from "./component/chess-board/chessboard.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card></Card>
        <ChessBoard />
      </div>
    );
  }
}

export default App;
