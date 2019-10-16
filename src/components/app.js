import React, { Component } from 'react';
import Recorder from './recorder';
import Clips from './clips';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text-center">
          <h1>Web dictaphone</h1>
          <Recorder />
          <Clips />
        </div>
      </div>
    );
  }
}
