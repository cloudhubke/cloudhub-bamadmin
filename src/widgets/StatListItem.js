import React from 'react';
import { Block } from 'cloudhub-components';

const StatListItem = ({
  icon,
  primaryComponent,
  secondaryComponent,
  rightComponent,
  ...props
}) => {
  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-3">
      <div className="d-flex">
        {icon}
        <div>
          <b>{primaryComponent}</b>
          <div className="text-black-50">{secondaryComponent}</div>
        </div>
      </div>
      <div className="font-weight-bold text-warning font-size-lg">
        {rightComponent}
      </div>
    </div>
  );
};

export default StatListItem;
