import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='link'>
        <h1>Rock'em Sock'em</h1>
      </Link>
    </div>
  );
};

export default Header;
