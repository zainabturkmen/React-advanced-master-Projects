import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function

const Index = () => {
  const [people, setPeople] = useState(data)
  return <h2>useReducer</h2>; 
};

export default Index;
