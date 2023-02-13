import React from "react";
import BookShow from "../components/BookShow";

const BookList = ({ books, onDelete, onUpdate }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate} />;
      })}
    </div>
  );
};

export default BookList;
