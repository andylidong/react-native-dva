import {
  NavigationActions,
  createBottomTabNavigator,
  createStackNavigator,
  StackActions,
} from 'react-navigation';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

/**
 * 创建APP的组件
 */
export const App = (index) => reduxifyNavigator(index, 'root');

/**
 * 创建导航的reducer
 */
export const routerReducer = (index) => createNavigationReducer(index);

/**
 * 路径的中间件
 */
export const routerMiddleware = createReactNavigationReduxMiddleware('root', (state) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('state ', state);
  }
  if (state.router) {
    return state.router;
  }
  return null;
});

/**
 * 获取路径的名称
 * @param {*} navigationState
 */
export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

/**
 * 页面跳转 -- 入栈
 * @param {*} navigate
 */
export function go(navigate) {
  if (!navigate) {
    return {};
  }
  return NavigationActions.navigate(navigate);
}

/**
 * 页面跳转 -- 出栈
 * @param {*} navigate
 */
export function back(navigate) {
  if (navigate) {
    return NavigationActions.back(navigate);
  }
  return NavigationActions.back();
}

export default {
  go,
  back,
  StackActions,
  NavigationActions,
  createStackNavigator,
  createBottomTabNavigator,
  // 和reducer有关的组件、中间件
  routerReducer,
  routerMiddleware,
  App,
  // 其他的方法
  getActiveRouteName,
};
