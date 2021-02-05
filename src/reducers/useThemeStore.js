import create from 'zustand';
import reducer, { INITIAL_STATE } from './ThemeOptions';

const useThemeStore = create((set) => ({
  ...INITIAL_STATE,
  dispatch: (args) => set((state) => reducer(state, args))
}));

export default useThemeStore;
