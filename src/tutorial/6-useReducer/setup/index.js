import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function

const Index = () => {
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const []
  return <>
  {showModal && <Modal />}
  <form onSubmit={handleSubmit}>
    <div >
      <input type='text' />
    </div>
  </form>
  </>
};

export default Index;
