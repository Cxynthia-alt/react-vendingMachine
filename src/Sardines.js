import React from 'react';
import GoBackBtn from './GoBackBtn'
import Message from "./Message";


const Sardines = () => {
  return (
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)" }}>
      <Message>
        <h3>You don't eat the sardines. The sardines eat you!</h3>
        <GoBackBtn />
      </Message>
    </div>
  )
}

export default Sardines
