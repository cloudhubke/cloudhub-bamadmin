import React from 'react';

import clsx from 'clsx';

import { List, ListItem } from 'cloudhub-components/dist/mui/core';

import useTheme from 'reducers/useTheme';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  const { footerShadow, footerBgTransparent } = useTheme();
  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}>
        <div className="app-footer--first">
          <List
            component="div"
            className="nav-neutral-primary d-flex align-items-center">
            <ListItem
              className="rounded-sm"
              button
              component={NavLink}
              to="/DashboardAnalytics">
              <span>Analytics</span>
            </ListItem>
            <ListItem
              className="rounded-sm"
              button
              component={NavLink}
              to="/DashboardStatistics">
              <span>Statistics</span>
            </ListItem>
            <ListItem
              className="rounded-sm"
              button
              component={NavLink}
              to="/Overview">
              <span>Overview</span>
            </ListItem>
          </List>
        </div>
        <div className="app-footer--second">
          <span>Bamburgh React Admin Dashboard with Material-UI PRO</span> ©
          2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
          <a
            href="https://uifort.com"
            target="_blank"
            title="UiFort.com"
            rel="noopener noreferrer">
            UiFort.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
