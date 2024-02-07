import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [messageIdCounter, setMessageIdCounter] = useState(1); // Counter to generate unique message IDs
  const [botConversations, setBotConversations] = useState({
    Friend1: [],
    Friend2: [],
    // Add more friends as needed
  });
  const [selectedFriend, setSelectedFriend] = useState('Friend1'); // Initially selected friend

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const userMessage = { id: messageIdCounter, text: messageInput, user: 'You' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessageInput('');
      setMessageIdCounter(messageIdCounter + 1);
  
      // Save the user's message in the corresponding friend's conversation
      setBotConversations((prevConversations) => ({
        ...prevConversations,
        [selectedFriend]: [...(prevConversations[selectedFriend] || []), userMessage],
      }));
  
      // Simulate a response based on a particular message for the selected friend
      setTimeout(() => {
        const friendMessage = {
          id: messageIdCounter + 1,
          text: getFriendResponse(selectedFriend, messageInput),
          user: selectedFriend,
        };
  
        setMessages((prevMessages) => [...prevMessages, friendMessage]);
  
        // Save the friend's response in the corresponding friend's conversation
        setBotConversations((prevConversations) => ({
          ...prevConversations,
          [selectedFriend]: [...(prevConversations[selectedFriend] || []), friendMessage],
        }));
  
        setMessageIdCounter(messageIdCounter + 2);
      }, 1000);
    }
  };
  const getFriendResponse = (friend, userMessageText) => {
    // Simulate different responses based on the selected friend and user's message
    const lowercasedMessage = (userMessageText || '').toLowerCase();
  
    const sharedResponses = {
      howAreYou: ['I am doing well, thank you!', 'Feeling good!', 'All good here!'],
      jokes: [
        'Why did the computer go to therapy? It had too many bytes of emotional baggage!',
        'I told my wife she was drawing her eyebrows too high. She looked surprised.',
        'Why don\'t scientists trust atoms? Because they make up everything!',
      ],
    };
  
    const getRandomResponse = (responses) => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    };
  
    switch (friend) {
      case 'Friend1':
        if (lowercasedMessage.includes('hello')) {
          return 'Hello to you too!';
        } 
        else if (lowercasedMessage.includes('hi')) {
          return 'Hi there!';
        } 
        else if (lowercasedMessage.includes('how are you')) {
          return getRandomResponse(sharedResponses.howAreYou);
        } else if (lowercasedMessage.includes('good morning')) {
          return 'Good morning!';
        } else if (lowercasedMessage.includes('good night')) {
          return 'Good night!';
        } else if (lowercasedMessage.includes('how is the weather')) {
          return 'The weather is fine!';
        } else if (lowercasedMessage.includes('tell me a joke')) {
          return getRandomResponse(sharedResponses.jokes);
        } else if (lowercasedMessage.includes('your favorite color')) {
          return 'I think I would like the color code #00FF00 (green).';
        } else if (lowercasedMessage.includes('who created you')) {
          return 'I was created by talented developers!';
        } 
        else if (lowercasedMessage.includes('where are you from')) {
          return 'I exist in the world of code!';
        } else if (lowercasedMessage.includes('greetings')) {
          return getRandomResponse(['Hello!', 'Hi there!', 'Good day!', 'Greetings!', 'Hey!']);
        }
        else if (lowercasedMessage.includes('plans')) {
          return 'Not much, just chilling.';
        } else if (lowercasedMessage.includes('what do you like to do')) {
          return getRandomResponse(sharedResponses.howAreYou);
        } else if (lowercasedMessage.includes('favorite book')) {
          return 'I do not read books, but I love information!';
        } else if (lowercasedMessage.includes('hobbies')) {
          return 'My hobby is answering your questions!';
        } else if (lowercasedMessage.includes('favorite color')) {
          return 'I think blue is a nice color!';
        } else if (lowercasedMessage.includes('where are you located')) {
          return 'I exist in the digital realm!';
        } else if (lowercasedMessage.includes('tell me something interesting')) {
          return getRandomResponse(sharedResponses.jokes);
        } else if (lowercasedMessage.includes('music')) {
          return 'I do not have personal preferences, but I can help you find music!';
        } else {
          return 'Default friend response for Friend1';
        }
  
      case 'Friend2':
        if (lowercasedMessage.includes('hi')) {
          return 'Hi there!';
        } else if (lowercasedMessage.includes('hello')) {
          return 'Hello to you too!';
        } 
        
        else if (lowercasedMessage.includes('how are you')) {
          return getRandomResponse(sharedResponses.howAreYou);
        } else if (lowercasedMessage.includes('good morning')) {
          return 'Good morning!';
        } else if (lowercasedMessage.includes('good night')) {
          return 'Good night!';
        } else if (lowercasedMessage.includes('how is the weather')) {
          return 'The weather is fine!';
        } else if (lowercasedMessage.includes('tell me a joke')) {
          return getRandomResponse(sharedResponses.jokes);
        } else if (lowercasedMessage.includes('your favorite color')) {
          return 'I think I would like the color code #00FF00 (green).';
        } else if (lowercasedMessage.includes('who created you')) {
          return 'I was created by talented developers!';
        } 
        else if (lowercasedMessage.includes('where are you from')) {
          return 'I exist in the world of code!';
        } else if (lowercasedMessage.includes('greetings')) {
          return getRandomResponse(['Hello!', 'Hi there!', 'Good day!', 'Greetings!', 'Hey!']);
        }
        else if (lowercasedMessage.includes('plans')) {
          return 'Not much, just chilling.';
        } else if (lowercasedMessage.includes('what do you like to do')) {
          return getRandomResponse(sharedResponses.howAreYou);
        } else if (lowercasedMessage.includes('favorite book')) {
          return 'I do not read books, but I love information!';
        } else if (lowercasedMessage.includes('hobbies')) {
          return 'My hobby is answering your questions!';
        } else if (lowercasedMessage.includes('favorite color')) {
          return 'I think blue is a nice color!';
        } else if (lowercasedMessage.includes('where are you located')) {
          return 'I exist in the digital realm!';
        } else if (lowercasedMessage.includes('tell me something interesting')) {
          return getRandomResponse(sharedResponses.jokes);
        } else if (lowercasedMessage.includes('music')) {
          return 'I do not have personal preferences, but I can help you find music!';
        } else {
          return 'Default friend response for Friend2';
        }
  
      default:
        return 'Default friend response';
    }
  };
  
  const switchFriend = (friend) => {
    // Load conversation history for the selected friend
    setMessages(botConversations[friend] || []);
    setSelectedFriend(friend);
  };

  return (
    <div className="chat-body">
      <div className="chat-container">
        <div className="message-container">
          {messages.map((msg) => (
            <div key={msg.id} className="message-wrapper">
              <strong className="message-text">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">
            Send
          </button>
        </div>
        <div className="bot-switch-container">
          <button onClick={() => switchFriend('Friend1')} className="bot-switch-button bot-switch-friend1">
            Switch to Friend1
          </button>
          <button onClick={() => switchFriend('Friend2')} className="bot-switch-button bot-switch-friend2">
            Switch to Friend2
          </button>
          {/* Add more buttons for additional friends if needed */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
