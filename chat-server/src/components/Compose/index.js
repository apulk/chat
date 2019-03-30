import React, { Component } from 'react';
import './Compose.css';
// import configureSocket from '../../socket';
import socket from '../../socket'
// import $ from "jquery";


export default class Compose extends Component {
  render() {
    // var configureSocket.socket = '';
    this.doSomething = function (e) {
     
      e.preventDefault();
      console.log('it works!');
      socket.emit('chat message', 's');
      // $('#m').val('');
      return false;
   }
    this.msg = function(e) {
        this.setState({message: e.target.value});
    }

    return (
      <div className="compose">
        <form action="" onSubmit={this.doSomething}>
          <input
            type="text"
            id="m"
            className="compose-input"
            placeholder="Type a message, @name"
            
          />
        </form>
        {/* {
          this.props.rightItems
        } */}
      </div>
    );
  }
}