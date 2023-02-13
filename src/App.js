import "./App.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBook = {
      id: new Date().getMilliseconds(),
      title,
    };

    setBooks((prev) => [...prev, newBook]);

    console.log("Book: ", title);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onUpdate={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
