import { NavLink, Outlet } from 'react-router-dom';
import React, { memo } from 'react';

import './Layout.css';

type TIsActive = {
  isActive: boolean;
}

const getActiveLink = ({ isActive }: TIsActive) => {
  return isActive ? 'navListItem active' : 'navListItem';
};

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="navList">
            <li className="navListLi">
              <NavLink className={getActiveLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="navListLi">
              <NavLink className={getActiveLink} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default memo(Layout);
