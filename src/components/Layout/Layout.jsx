import { NavLink, Outlet } from 'react-router-dom';
import { memo } from 'react';

import styles from './Header.module.css';

const Layout = () => {
  return (
    <>
      <header className={styles.Header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default memo(Layout);
