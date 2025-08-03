import React, { useState } from 'react';

const EventExamples = () => {
  const [counter, setCounter] = useState(0);
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  // Multiple method call
  const increment = () => {
    setCounter(counter + 1);
    sayHello();
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const sayHello = () => {
    console.log("Hello! Counter incremented");
  };

  const sayWelcome = (message) => {
    alert(`Welcome Message: ${message}`);
  };

  const handleClick = (e) => {
    alert('I was clicked! (Synthetic Event)');
    console.log(e); // This is a synthetic event
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2); // assuming 1€ = ₹90
    setEuro(converted);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1> React Event Examples</h1>

      {/* Counter Example */}
      <h2>Counter</h2>
      <p>Value: {counter}</p>
      <button
      style={
        {
            backgroundColor:'#e41ff2ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      }  onClick={increment}>Increment</button>{' '}
      <button
      style={
        {
            backgroundColor:'#e41ff2ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } 
      onClick={decrement}>Decrement</button>

      <hr />

      {/* Say Welcome Example */}
      <h2>Say Welcome</h2>
      <button style={
        {
            backgroundColor:'#f21f23',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } onClick={() => sayWelcome("Welcome to React Events!")}>
        Say Welcome
      </button>

      <hr />

      {/* Synthetic Event Example */}
      <h2>Synthetic Event</h2>
      <button style={
        {
            backgroundColor:'#13e347ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } 
      
      onClick={handleClick}>Click Me (Synthetic)</button>

      <hr />

      {/* Currency Converter */}
      <h2>Currency Converter (INR to EUR)</h2>
      <form onSubmit={handleConvert}>
        <input
          type="number"
          placeholder="Amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
          borderRadius="5px"
        />{' '}
        <button 
        style={
        {
            backgroundColor:'#e37413ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } 
        type="submit">Convert</button>
      </form>
      {euro && <p >Converted: €{euro}</p>}
    </div>
  );
};

export default EventExamples;
