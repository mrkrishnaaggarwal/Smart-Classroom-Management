import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ onClick, children, className = '' ,to}) => {
  return (
    <>
    <button 
      onClick={onClick} 
      className={`${className}`}
    >
      {children}
    </button>
    <Link to = {to}></Link>
    </>
  );
};

export default Button;
