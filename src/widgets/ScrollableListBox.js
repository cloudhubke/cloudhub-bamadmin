import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button } from 'cloudhub-components/dist/mui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import CountUp from 'react-countup';

import AddAlertTwoToneIcon from '@material-ui/icons/AddAlertTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';

export default function ScrollableListBox({
  title = '',
  headerAction,
  height
}) {
  return (
    <>
      <Card
        className="card-box overflow-hidden p-0 mb-spacing-6-x2"
        style={{ minHeight: height }}>
        <div className="card-header bg-secondary">
          <div className="card-header--title">
            <h5 className="font-size-lg mb-0 line-height-1 py-2 font-weight-bold">
              {title}
            </h5>
          </div>

          <div>{headerAction}</div>
        </div>
        <div className="shadow-overflow">
          <PerfectScrollbar
            className="scroll-area-md"
            options={{ wheelPropagation: false }}>
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex">
                <AddAlertTwoToneIcon className="h1 d-block mr-3 text-warning" />
                <div>
                  <b>Reports</b>
                  <div className="text-black-50">Monthly sales reports</div>
                </div>
              </div>
              <div className="font-weight-bold text-danger font-size-lg">
                <CountUp
                  start={0}
                  end={2.363}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={3}
                  decimal=","
                />
              </div>
            </div>
            <div className="divider" />
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex">
                <AssignmentTurnedInTwoToneIcon className="h1 d-block mr-3 text-success" />
                <div>
                  <b>User</b>
                  <div className="text-black-50">Visitors last week</div>
                </div>
              </div>
              <div className="font-weight-bold text-success font-size-lg">
                <CountUp
                  start={0}
                  end={643}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
            <div className="divider" />

            <div className="divider" />
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex">
                <PrintTwoToneIcon className="h1 d-block mr-3 text-first" />
                <div>
                  <b>Stats</b>
                  <div className="text-black-50">Last month targets</div>
                </div>
              </div>
              <div className="font-weight-bold text-first font-size-lg">
                {' '}
                $1,23M
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </Card>
    </>
  );
}
