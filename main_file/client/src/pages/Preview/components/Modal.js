// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ target, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{target.name}</h2>
        <img src={target.image} alt={target.name} />
        <p>{target.description}</p>
      </div>
    </div>
  );
};

export default Modal;
