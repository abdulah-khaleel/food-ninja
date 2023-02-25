import React, { useState } from 'react';
import NavItem from './NavItem';
import homeIcon from '../assets/homeIcon.svg';
import contactIcon from '../assets/contactIcon.svg';
import aboutIcon from '../assets/aboutIcon.svg';
import menuIcon from '../assets/menuIcon.svg';

const Nav = props => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(prevState => !prevState);
  };
  return (
    <nav className="text-right">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 border-b border-gray-100 hover:text-gray-800 transform transition ease-out duration-300 ">
          <a href="/" className="">
            Food Ninja
          </a>
        </h1>
        <div className="px-4 cursor-pointer md:hidden" onClick={handleClick}>
          <img className="w-6" src={menuIcon} alt="menu-icon" />
        </div>
      </div>
      <ul className={`text-sm mt-6 ${isHidden ? 'hidden' : ' '} md:block`}>
        <NavItem
          activePage={!props.showAbout}
          navItem={'Home'}
          icon={homeIcon}
          redirectHome={props.redirectHome}
        />
        <NavItem
          activePage={props.showAbout}
          navItem={'About'}
          icon={aboutIcon}
          redirectAbout={props.redirectAbout}
        />
        <NavItem navItem={'Contact'} icon={contactIcon} />
      </ul>
    </nav>
  );
};

export default Nav;
