import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Read a book to open your mind</h2>
          <br/>
          <p className='header-text fs-18 fw-3'>A library is a place where many books are kept most libraries are public
            and let people take the books to use in their home.most libraries let people borrow
            books for several weeks........</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header