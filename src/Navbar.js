import React from 'react';
import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="vendingMachine">
      <nav className="Navbar">
        <NavLink exact to="/soda">Soda</NavLink>
        <NavLink exact to="/chips">Chips</NavLink>
        <NavLink exact to="/sardines">Fresh Sardines</NavLink>
      </nav>
      <h2>Hello! I'm a vending machine. What do you like to eat?</h2>

    </div >

  )
}
export default Navbar
