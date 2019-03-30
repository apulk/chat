import io from 'socket.io-client';
import axios from 'axios';

// export const socket = io('http://localhost:8000');
// socket.on('connect',() => {
//     console.log('Connected');
// })
// var socket = ''

// state = {
//     name: '',
//   }
const socket = io('http://localhost:8000');

const user = {
    name: ''
  };

socket.on('chat message', function(msg){
    console.log(msg);
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
});

export default socket;