import React, { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';

let socket;
const CONNECTION_PORT = 'localhost:3000/';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] =useState('');
  const [userName, setUserName] =useState('');

  useEffect(()=> {
  socket = io(CONNECTION_PORT)    
  }, [CONNECTION_PORT]);

  const connectToRoom = () => {
    socket.emit('join_room', room);
  }

  return (
    <div className="App">
      {!loggedIn ? (
        <div className='logIn'>
          <div className='inputs'>
            <input type='text' placeholder='Name...' onChange={(e)=>setUserName(e.target.value)}/>
            <input type='text' placeholder='Room...' onChange={(e)=>setRoom(e.target.value)} />
            <button onClick={connectToRoom}>Enter Chat</button>
          </div>
        </div>
      ) : (
        <h1>You are logged in</h1>
      )
      }
    </div>
  );
}

export default App;
