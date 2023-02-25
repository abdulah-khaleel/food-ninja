import React from 'react';

const NavItem = props => {
  const currentPage = 'border-r-4 border-primary font-bold';
  return (
    <li
      className={`text-gray-700 py-1 mr-1 ${props.activePage && currentPage} ${
        !props.activePage && 'border-r-4 border-white'
      }`}
    >
      <a href="#">
        <span>{props.navItem}</span>
        <img className="w-5 inline ml-2 mr-2" src={props.icon} alt="" />
      </a>
    </li>
  );
};

export default NavItem;
