import React from 'react'
import logo from '../Asset/Yourbank.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<nav className="bg-blue-500 p-4 flex items-center justify-between border-b-2">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-0.5 " />
        <span className="text-white font-bold text-2xl">YourBank</span>
      </div></Link>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <ul className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
      
        <li>
          <Link to="/" className="text-white text-xl text-medium">Bank</Link>
        </li>
        <li>
          <Link to="Transfer" className="text-white text-xl text-medium">Transfer</Link>
        </li>
        <li>
          <Link to="Statement" className="text-white text-xl text-medium">Statement</Link>
        </li>
        <li>
          <Link to="profile" className="text-white text-xl text-medium">Profile</Link>
        </li>
        <li>
          <Link to="aboutus" className="text-white text-xl text-medium">About Us</Link>
        </li>

      </ul>
    </nav>
);
 
}

export default Navbar