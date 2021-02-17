import React from 'react';

import clsx from 'clsx';

import HeaderDots from '../../layout-components/HeaderDots';
import HeaderDrawer from '../../layout-components/HeaderDrawer';
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import HeaderSearch from '../../layout-components/HeaderSearch';
import HeaderMenu from '../../layout-components/HeaderMenu';

import useTheme from 'reducers/useTheme';

const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = useTheme();

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className={clsx('app-header', {
          'app-header--shadow': headerShadow,
          'app-header--opacity-bg': headerBgTransparent
        })}>
        <div className="app-header--pane">
          <button
            className={clsx(
              'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
              { 'is-active': sidebarToggleMobile }
            )}
            onClick={toggleSidebarMobile}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <HeaderSearch />
          <HeaderMenu />
        </div>
        <div className="app-header--pane">
          <HeaderDots />
          <HeaderUserbox />
          <HeaderDrawer />
        </div>
      </div>
    </>
  );
};

export default Header;
