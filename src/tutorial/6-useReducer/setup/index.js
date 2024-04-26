import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function

const Index = () => {
  const [value, setValue] = useState("")
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const []
  return <>
  {showModal && <Modal />}
  <form onSubmit={handleSubmit}>
    <div >
      <input type='text' value={value} />
    </div>
  </form>
  </>
};

export default Index;
