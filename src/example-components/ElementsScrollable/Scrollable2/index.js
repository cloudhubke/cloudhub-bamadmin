import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Button,
  List,
  ListItem
} from 'cloudhub-components/dist/mui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box p-0 mb-spacing-6-x2">
        <div className="bg-composed-wrapper bg-night-sky">
          <div className="bg-composed-wrapper--image bg-second opacity-1" />
          <div className="bg-composed-wrapper--image bg-composed-img-2" />
          <div className="bg-composed-wrapper--content text-center text-light p-5">
            <h5 className="mb-2 font-size-xl font-weight-bold">
              Bamburgh React Admin Dashboard with Material-UI PRO
            </h5>
            <p className="mb-0 font-size-lg opacity-8">
              Scrollable boxes example with navigation menus and fixed footer
              areas.
            </p>
          </div>
        </div>
        <div className="shadow-overflow">
          <PerfectScrollbar
            className="scroll-area"
            option={{ wheelPropagation: false }}>
            <List
              component="div"
              className="nav-neutral-first nav-lg flex-column p-3">
              <ListItem
                button
                selected
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Analytics</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Reports</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Real Estate</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Server Stats</span>
                <div className="ml-auto">
                  <div className="mr-3 badge badge-pill badge-primary">82</div>
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Reports</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Real Estate</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>

              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Reports</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Real Estate</span>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon opacity-7">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Server Stats</span>
                <div className="ml-auto">
                  <div className="mr-3 badge badge-pill badge-primary">82</div>
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xs opacity-3"
                  />
                </div>
              </ListItem>
            </List>
          </PerfectScrollbar>
        </div>
        <div className="card-footer d-flex py-3 justify-content-center">
          <Button className="btn-first">
            <small className="font-weight-bold font-size-xs text-uppercase px-4">
              Generate Reports
            </small>
          </Button>
        </div>
      </Card>
    </>
  );
}
