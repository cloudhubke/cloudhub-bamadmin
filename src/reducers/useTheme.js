import React from 'react';

import themeActions from './themeActions';
import useThemeStore from './useThemeStore';

const useTheme = (props) => {
  const { dispatch, ...state } = useThemeStore((state) => state);
  const actions = React.useMemo(() => themeActions({ dispatch }), [dispatch]);

  return {
    ...state,
    ...actions
  };
};

export default useTheme;
