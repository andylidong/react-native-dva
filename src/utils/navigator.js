import {
  NavigationActions,
  NavigationNavigateAction,
  createBottomTabNavigator,
  createStackNavigator,
  StackActions
} from 'react-navigation'

/**
 * 页面跳转 -- 入栈
 * @param {*} navigate 
 */
function go(navigate) {
  if (!navigate) {
    return {}
  }
  return NavigationActions.navigate(navigate)
}

/**
 * 页面跳转 -- 出栈
 * @param {*} navigate 
 */
function back(navigate) {
  if (navigate) {
    return NavigationActions.back(navigate)
  }
  return NavigationActions.back()
}

export default {
  go,
  back,
  StackActions,
  NavigationActions,
  createStackNavigator,
  createBottomTabNavigator,
}
