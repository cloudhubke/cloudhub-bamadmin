import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from 'cloudhub-components/dist/mui/core';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

import { NavLink } from 'react-router-dom';

import projectLogo from '../../assets/images/react.svg';
import useTheme from 'reducers/useTheme';

const SidebarHeader = (props) => {
  const {
    sidebarToggleMobile,
    setSidebarToggleMobile,

    sidebarToggle,
    setSidebarToggle
  } = useTheme();

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <>
      <div className="app-sidebar--header">
        <div className="app-sidebar-logo">
          <NavLink
            to="/"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-sidebar-logo">
            <div className="app-sidebar-logo--icon">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-sidebar-logo--text">
              <span>General</span>

              <b>bamburgh</b>
            </div>
          </NavLink>
        </div>
        <Tooltip title="Collapse sidebar" placement="right" arrow>
          <Button
            onClick={toggleSidebar}
            className="btn btn-sm collapse-sidebar-btn">
            <MenuOpenRoundedIcon />
          </Button>
        </Tooltip>
        <Button
          className={clsx(
            'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
            { 'is-active': sidebarToggleMobile }
          )}
          onClick={toggleSidebarMobile}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </Button>
        <Tooltip title="Expand sidebar" placement="right" arrow>
          <Button
            onClick={toggleSidebar}
            className="expand-sidebar-btn btn btn-sm">
            <FontAwesomeIcon icon={['fas', 'arrows-alt-h']} />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default SidebarHeader;
