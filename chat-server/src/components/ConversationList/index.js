import React, { Component } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import MessageList from '../MessageList'
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default class ConversationList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      messages:[],
      tomsg1:[]
    };
  }
  getMessages = () => {
    console.log(1);
        let messages = ''

    axios.post(`https://beldara.com/react-api/get_history_chat.php?user=122`)
      .then(res => {
        const persons = res;
        console.log(persons);
        this.setState({ messages:[res.data] });
        this.setState(prevState => {
          return {
            ...prevState,
            messages: res.data.result
          }
        });
          
      })
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     messages: [
    //       {
    //         id: 1,
    //         author: 'apple',
    //         message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 2,
    //         author: 'orange',
    //         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 3,
    //         author: 'orange',
    //         message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 4,
    //         author: 'apple',
    //         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 5,
    //         author: 'apple',
    //         message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 6,
    //         author: 'apple',
    //         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 7,
    //         author: 'orange',
    //         message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 8,
    //         author: 'orange',
    //         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 9,
    //         author: 'apple',
    //         message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
    //         timestamp: new Date().getTime()
    //       },
    //       {
    //         id: 10,
    //         author: 'orange',
    //         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
    //         timestamp: new Date().getTime()
    //       }
    //     ]
    //   };
    // });
      // console.log(this.messages)
  }
  
  componentDidMount() {
    this.getConversations();
  }
  showMsgHistory =  (tomsg) => {
    // const {tomsg} = this.props;
    console.log(tomsg)
    this.setState({ tomsg1:tomsg })
    
  }
  getConversations = () => {
    axios.get('https://beldara.com/react-api/get_contact_list.php',{ crossdomain: true })
    .then(response => {
      this.setState(prevState => {
        let conversations = response.data.result.map(result => {
          return {
            photo: result.picture,
            name: `${result.name}`,
            // text: 's'
            tomsg:result.sellerid
          };
        });

        return { ...prevState, conversations };
      });
    });
  }
 
  render() {
    return (
      <React.Fragment>
        <div className="scrollable sidebar">
        <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.tomsg}
              data={conversation}
              showMsgHistory={this.showMsgHistory}
            />
          )
        }
        
      </div>
      </div>
        <div className="scrollable content">
          <MessageList 
            tomsg={this.state.tomsg1}
          />
        </div>
      </React.Fragment>

    );
  }
}