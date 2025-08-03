import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [active, setActive] = useState("book");

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Blogger App</h1>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px' }}>
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
        onClick={() => setActive("book")}>Book Details</button>{' '}
        <button 
        style={
        {
            backgroundColor:'#f8a218ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } 
        onClick={() => setActive("blog")}>Blog Details</button>{' '}
        <button 
        style={
        {
            backgroundColor:'#1fb3f2ff',
            cursor:'pointer',
            border:'none',
            borderRadius:'5px',
            color:'White'
        }
      } 
        onClick={() => setActive("course")}>Course Details</button>
      </div>

      {/* Conditional Rendering */}
      {active === "book" && <BookDetails />}
      {active === "blog" && <BlogDetails />}
      {active === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
