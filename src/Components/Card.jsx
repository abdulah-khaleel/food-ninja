import React from 'react';
import Badge from './Badge';

const Card = props => {
  return (
    <div className="card">
      <img
        src={props.image}
        alt=""
        className="w-full h-32 md:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{props.title}</span>
        <span className="block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
      <Badge />
    </div>
  );
};

export default Card;
