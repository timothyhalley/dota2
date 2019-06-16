/**
 * Project default configuration item
 * primaryColor - Default theme color, if the modified color does not take effect, please clean up localStorage
 * navTheme - sidebar theme ['dark', 'light'] Two themes
 * colorWeak - Color blind mode
 * layout - Overall layout ['sidemenu', 'topmenu'] Two layouts
 * fixedHeader - fixed Header : boolean
 * fixSiderbar - Fixed left menu bar ： boolean
 * autoHideHeader - Hide when scrolling down Header : boolean
 * contentWidth - Content area layout: Streaming | Fixed
 *
 * storageOptions: {} - Vue-ls Plugin configuration item (localStorage/sessionStorage)
 *
 */

export default {
  primaryColor: '#52C41A', // primary color of ant design
  navTheme: 'dark', // theme for nav menu
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  autoHideHeader: false, //  auto hide header
  colorWeak: false,
  multiTab: false,
  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
  // vue-ls options
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}
