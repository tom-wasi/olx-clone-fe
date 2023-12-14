import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Header from './component/Header';
import SearchResults from './component/SearchResults';
import Home from './component/Home';
import NotFoundPage from './component/NotFoundPage';
import "./App.css"
import { SearchField } from './component/SearchField';
const App = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <Router>
    <Header/>
    <SearchField/>
    <div className='App'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/not-found" element={<NotFoundPage/>} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;