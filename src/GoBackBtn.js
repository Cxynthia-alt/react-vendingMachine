import React from 'react';

import { useHistory } from "react-router-dom"

const GoBackBtn = () => {
  const history = useHistory()
  const handleClick = () => {
    history.goBack()
  }
  return (
    <>
      <button onClick={handleClick}>Go Back</button>
    </>
  )
}

export default GoBackBtn
