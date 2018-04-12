import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { key: '', keyCode: '', color: '#fff' }
  }

  componentDidMount() { window.addEventListener('keydown', this.handleKeyPress) }

  componentWillUnmount() { window.removeEventListener('keydown', this.handleKeyPress) }

  handleKeyPress = (e) => {
    this.setState({ key: e.key, keyCode: e.keyCode, color: this.getRandomColor() });
  }

  getRandomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

  render() {
    return (
      <div onKeyDown={(e) => this.handleKeyPress(e)} className="App" style={ { backgroundColor: this.state.color } }>
        <div className="Key">
          {this.state.key}
        </div>
        <div className="Key">
          {this.state.keyCode}
        </div>
      </div>
    );
  }
}

export default App;
