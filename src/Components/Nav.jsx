import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav>
      <div>
        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="">
            Food Ninja
          </a>
        </h1>
      </div>
      <ul>
        <NavItem navItem={'Home'} />
        <NavItem navItem={'About'} />
        <NavItem navItem={'Contact'} />
      </ul>
    </nav>
  );
};

export default Nav;
