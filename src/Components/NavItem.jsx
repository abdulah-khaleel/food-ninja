import React from 'react';

const NavItem = props => {
  return (
    <li className="text-gray-700 ">
      <a href="#">
        <span>{props.navItem}</span>
      </a>
    </li>
  );
};

export default NavItem;
