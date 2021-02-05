import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from 'cloudhub-components/dist/mui/core';
import useTheme from 'reducers/useTheme';

const HeaderSearch = (props) => {
  const { headerSearchHover, setHeaderSearchHover } = useTheme();

  const toggleHeaderSearchHover = () => {
    setHeaderSearchHover(!headerSearchHover);
  };

  return (
    <>
      <div className="header-search-wrapper">
        <div
          className={clsx('search-wrapper', {
            'is-active': headerSearchHover
          })}>
          <label className="icon-wrapper" htmlFor="header-search-input">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </label>
          <TextField
            onFocus={toggleHeaderSearchHover}
            onBlur={toggleHeaderSearchHover}
            id="header-search-input"
            name="header-search-input"
            type="search"
            placeholder="Search terms..."
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
