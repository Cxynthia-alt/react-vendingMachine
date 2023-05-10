import React, { useState } from 'react';
import chipsImg from './Chip.png'
import GoBackBtn from './GoBackBtn'
import './Chips.css'
import Message from "./Message"

const Chips = () => {

  const [bags, setBags] = useState([])
  const handleClick = () => {
    const newBag = {
      x: window.innerWidth * Math.random(),
      y: window.innerHeight * Math.random()
    }
    setBags(prevBags => [...prevBags, newBag])
  }

  const b = bags.map((bag, i) => (
    <div style={{ position: 'absolute', top: `${bag.y}px`, left: `${bag.x}px` }}>
      <img key={i} src={chipsImg} className="bag" alt="lay's chip bag" />
    </div>
  ))

  return (
    <div className="Chips">
      <Message>
        <h3>Bags eaten: {bags.length} </h3>
        <div className="btn-container">
          <button onClick={handleClick}>Nom Nom Nom</button>
          <GoBackBtn />
        </div>
      </Message>
      {b}
    </div >
  )
}

export default Chips
