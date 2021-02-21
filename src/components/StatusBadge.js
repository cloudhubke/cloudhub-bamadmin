import React from 'react';

const StatusBadge = ({ children, color = 'success', ...props }) => {
  return <div className={`badge badge-${color}`}>{children}</div>;
};

export default StatusBadge;
