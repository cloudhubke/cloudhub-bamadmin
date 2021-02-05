import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Header, SidebarCollapsed } from '../../layout-components';

const CollapsedSidebar = (props) => {
  const {
    children,
    contentBackground,
    sidebarToggleMobile,
    headerDrawerToggle,
    headerSearchHover
  } = props;

  return (
    <>
      <div
        className={clsx(
          'app-wrapper app-sidebar-collapsed app-sidebar-fixed app-header-fixed vh-100',
          contentBackground,
          {
            'app-sidebar-mobile-open': sidebarToggleMobile,
            'header-drawer-open': headerDrawerToggle,
            'search-wrapper-open': headerSearchHover
          }
        )}>
        <SidebarCollapsed />
        <div className="app-main">
          <Header />
          <div className="app-content">
            <div className="app-inner-content-layout--main">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

CollapsedSidebar.propTypes = {
  children: PropTypes.node
};

export default CollapsedSidebar;
