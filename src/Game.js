import React, { Component } from 'react';
import './Game.css';

class Game extends Component {

  render() {
    return (
      <div className="Game">
        <h2 id="feedback">Make Your Guess!</h2>
        <form>
          <input type="text" name="userGuess" id="userGuess" class="text" placeholder="Enter Your Guess" required/> 
          <input type="submit" id="guessButton" class="button" name="submit" value="Guess"/> 
        </form>
        <p>
          Guess #
          <span id="count">0</span>
          !
        </p>
        <ul id="guessList" class="guessBox clearfix">

        </ul>
      </div>
    );
  }
}

export default Game;