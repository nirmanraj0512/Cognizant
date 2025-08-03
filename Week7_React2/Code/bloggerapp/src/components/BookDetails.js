import React from 'react';

const books = [
  { id: 1, title: "PanchTantra", author: "Vishnu Sharma" },
  { id: 2, title: "Godan", author: "PremChand" },
  { id: 3, title: "Gunda", author: "JayShankar Prasad" }
];

const BookDetails = () => {
  return (
    <div>
      <h2> Book List</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
