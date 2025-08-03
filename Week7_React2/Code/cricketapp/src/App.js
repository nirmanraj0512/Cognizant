
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import { useState } from 'react';

function App() {
  const [flag,setFlag]=useState(true);
  const toggleFlag=()=>{
    setFlag(prevFlag=>!prevFlag);
  };
  return (
    <div className="App" style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1> Cricket App</h1>
      
      {/* Toggle Button */}
      <button onClick={toggleFlag} style={{
        padding: '10px 20px',
        marginBottom: '20px',
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Show {flag ? 'Indian Players' : 'List of Players'}
      </button>

      {/* Conditional Rendering */}
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
