/**
 * 获取路径的名称
 * @param {*} navigationState 
 */
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}


export default {
  getActiveRouteName,
};