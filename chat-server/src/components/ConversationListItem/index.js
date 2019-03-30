import React, { Component } from 'react';
import shave from 'shave';
import './ConversationListItem.css';
import axios from 'axios';

export default class ConversationListItem extends Component {
  // const sellerid = '';
  componentDidMount() {
    shave('.conversation-snippet', 20);
  }

 
  render() {
    const { photo, name, text,tomsg } = this.props.data;

    return (
      <React.Fragment>
        <div className="conversation-list-item" onClick={this.props.showMsgHistory.bind(this,tomsg)}>
          <img className="conversation-photo" src={photo} alt={name} onError={(e)=>{e.target.onerror = null; e.target.src="https://beldara.com/images/User_Avatarpng.png"}} />
          <div className="conversation-info">
            <h1 className="conversation-title">{ name }</h1>
            <p className="conversation-snippet">{ text }</p>
          </div>
        </div>
        
      </React.Fragment>
      
    );
  }
}