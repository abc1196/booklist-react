import React from 'react';
import './App.scss';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  return (
  <BookContextProvider>
    <Navbar />
    <BookList />
    <BookForm />
  </BookContextProvider>
  );
}

export default App;
