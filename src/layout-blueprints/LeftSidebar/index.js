import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Sidebar, Header, Footer } from '../../layout-components';
import useTheme from 'reducers/useTheme';

const LeftSidebar = ({ children }) => {
  const {
    sidebarToggle,
    sidebarToggleMobile,
    sidebarFixed,
    headerFixed,
    headerSearchHover,
    headerDrawerToggle,
    footerFixed,
    contentBackground
  } = useTheme();

  return (
    <>
      <div
        className={clsx('app-wrapper', contentBackground, {
          'header-drawer-open': headerDrawerToggle,
          'app-sidebar-collapsed': sidebarToggle,
          'app-sidebar-mobile-open': sidebarToggleMobile,
          'app-sidebar-fixed': sidebarFixed,
          'app-header-fixed': headerFixed,
          'app-footer-fixed': footerFixed,
          'search-wrapper-open': headerSearchHover
        })}>
        <div>
          <Sidebar />
        </div>
        <div className="app-main">
          <Header />
          <div className="app-content">
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

LeftSidebar.propTypes = {
  children: PropTypes.node
};

export default LeftSidebar;
