import React, { useState } from 'react';
import GuestView from './components/GuestView';
import UserView from './components/UserView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Ticket Booking App</h1>

      {/* Login/Logout Button */}
      <button
        onClick={toggleLogin}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: isLoggedIn ? 'tomato' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Conditional Rendering */}
      {isLoggedIn ? <UserView /> : <GuestView />}
    </div>
  );
}

export default App;
