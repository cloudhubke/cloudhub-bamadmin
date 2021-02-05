import React from 'react';
import clsx from 'clsx';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarFooter
} from '../../layout-components';
import useTheme from 'reducers/useTheme';

const Sidebar = (props) => {
  const {
    sidebarStyle,
    sidebarShadow,
    sidebarFooter,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = useTheme();
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  return (
    <>
      <div
        className={clsx('app-sidebar', sidebarStyle, {
          'app-sidebar--shadow': sidebarShadow
        })}>
        <SidebarHeader />
        <div className="app-sidebar--content">
          <SidebarMenu />
        </div>
        {sidebarFooter && <SidebarFooter />}
      </div>
      <div
        onClick={toggleSidebarMobile}
        className={clsx('app-sidebar-overlay', {
          'is-active': sidebarToggleMobile
        })}
      />
    </>
  );
};

export default Sidebar;
