// Install required packages: npm install react socket.io-client
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001'); // Replace with your backend URL
    setSocket(newSocket);

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.disconnect();
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      socket.emit('sendMessage', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Chat Room</h1>
          <div>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
