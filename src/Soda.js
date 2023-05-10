import React from 'react';
import GoBackBtn from './GoBackBtn'
import Message from "./Message"
import './Soda.css'

const Soda = () => {

  return (
    <div className="soda">
      <Message>
        <h3>OMG Sugarrrr</h3>
        <GoBackBtn />
      </Message>
    </div>
  )
}

export default Soda
