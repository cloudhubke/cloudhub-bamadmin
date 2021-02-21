import React, { useState } from 'react';
import { Popover } from 'cloudhub-components/dist/mui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

const ActionPopoverButton = React.forwardRef(
  (
    {
      anchorComponent: AnchorComponent,
      headerComponent,
      children,
      actionButtons = [],
      size = 'md',
      width = 'xl',
      ...props
    },
    ref
  ) => {
    const anchorRef = React.useRef();
    const [anchorEl, setAnchorEl] = useState(null);

    //   function openUserMenu(event) {
    //     console.log('====================================');
    //     console.log(event);
    //     console.log('====================================');
    //     setAnchorEl(event.currentTarget);
    //   }
    function handleClose() {
      setAnchorEl(null);
    }

    const onMenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (handleClose) {
          handleClose(event, 'escapeKeyDown');
        }
      }
    };

    const Anchor = () => {
      if (!AnchorComponent) {
        return null;
      }
      if (typeof AnchorComponent === 'function') {
        return AnchorComponent();
      }

      return React.cloneElement(AnchorComponent, {
        ...AnchorComponent.props,
        onClick: () => {
          setAnchorEl(anchorRef.current);
        }
      });
    };

    React.useImperativeHandle(ref, () => ({
      close: () => setAnchorEl(null)
    }));

    return (
      <>
        <div className="d-flex align-items-center">
          <div ref={anchorRef}>
            <Anchor />
          </div>
          <Popover
            component="div"
            anchorEl={anchorEl}
            keepMounted
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            MenuListProps={{
              onKeyDown: onMenuKeyDown,
              component: 'div'
            }}
            onClose={handleClose}
            {...props}>
            <div className={`dropdown-menu-${width} outline-none p-0`}>
              <div className="bg-composed-wrapper bg-vicious-stance mt-0">
                <div className="bg-composed-wrapper--image bg-composed-img-5" />
                <div className="bg-composed-wrapper--content text-white text-center p-4">
                  {headerComponent}
                </div>
              </div>
              <div className={`scroll-area-${size} shadow-overflow`}>
                <PerfectScrollbar>{children}</PerfectScrollbar>
              </div>
              <div className="card-footer d-flex justify-content-between">
                {actionButtons}
              </div>
            </div>
          </Popover>
        </div>
      </>
    );
  }
);

export default ActionPopoverButton;
