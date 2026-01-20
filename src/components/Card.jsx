import React from 'react';
import './Card.css';

const Card = ({ title, description, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title"><b>{title}</b></h3>
      <p className="card-description">{description}</p>
      <div className="card-shine"></div>
    </div>
  );
};

export default Card;