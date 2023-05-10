import React from 'react';
import GoBackBtn from './GoBackBtn'
import Message from "./Message";
import "./Sardines.css"

const Sardines = () => {
  return (
    <div className="sardines" >
      <Message>
        <h3>You don't eat the sardines. The sardines eat you!</h3>
        <GoBackBtn />
      </Message>
    </div>
  )
}

export default Sardines
