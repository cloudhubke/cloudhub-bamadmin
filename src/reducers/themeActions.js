import {
  setSidebarShadow,
  setSidebarFixed,
  setSidebarStyle,
  setSidebarFooter,
  setSidebarToggleMobile,
  setSidebarToggle,
  setSidebarUserbox,
  setHeaderFixed,
  setHeaderShadow,
  setHeaderBgTransparent,
  setHeaderSearchHover,
  setHeaderDrawerToggle,
  setContentBackground,
  setThemeConfiguratorToggle,
  setFooterFixed,
  setFooterShadow,
  setFooterBgTransparent,
  setPageTitleStyle,
  setPageTitleBackground,
  setPageTitleShadow,
  setPageTitleIconBox,
  setPageTitleDescription
} from './ThemeOptions';

const themeActions = ({ dispatch }) => {
  const actions = {
    setSidebarShadow: (payload) => dispatch(setSidebarShadow(payload)),
    setSidebarFixed: (payload) => dispatch(setSidebarFixed(payload)),
    setSidebarStyle: (payload) => dispatch(setSidebarStyle(payload)),
    setSidebarFooter: (payload) => dispatch(setSidebarFooter(payload)),
    setSidebarToggleMobile: (payload) =>
      dispatch(setSidebarToggleMobile(payload)),
    setSidebarToggle: (payload) => dispatch(setSidebarToggle(payload)),
    setSidebarUserbox: (payload) => dispatch(setSidebarUserbox(payload)),
    setHeaderFixed: (payload) => dispatch(setHeaderFixed(payload)),
    setHeaderShadow: (payload) => dispatch(setHeaderShadow(payload)),
    setHeaderBgTransparent: (payload) =>
      dispatch(setHeaderBgTransparent(payload)),
    setHeaderSearchHover: (payload) => dispatch(setHeaderSearchHover(payload)),
    setHeaderDrawerToggle: (payload) =>
      dispatch(setHeaderDrawerToggle(payload)),
    setContentBackground: (payload) => dispatch(setContentBackground(payload)),
    setThemeConfiguratorToggle: (payload) =>
      dispatch(setThemeConfiguratorToggle(payload)),
    setFooterFixed: (payload) => dispatch(setFooterFixed(payload)),
    setFooterShadow: (payload) => dispatch(setFooterShadow(payload)),
    setFooterBgTransparent: (payload) =>
      dispatch(setFooterBgTransparent(payload)),
    setPageTitleStyle: (payload) => dispatch(setPageTitleStyle(payload)),
    setPageTitleBackground: (payload) =>
      dispatch(setPageTitleBackground(payload)),
    setPageTitleShadow: (payload) => dispatch(setPageTitleShadow(payload)),
    setPageTitleIconBox: (payload) => dispatch(setPageTitleIconBox(payload)),
    setPageTitleDescription: (payload) =>
      dispatch(setPageTitleDescription(payload))
  };

  return actions;
};

export default themeActions;
