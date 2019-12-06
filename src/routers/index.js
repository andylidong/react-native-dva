import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import Loading from '@/components/Loading';
import AppNavigator from './navigator/AppNavigator';
import { Dva, Router, Navigator } from '@/utils';


export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware('root', (state) => state.router);

const App = reduxifyNavigator(AppNavigator, 'root');

/**
 * 整个路由管理
 */
@Dva.connect(({ app, router }) => ({ app, router }))
class Routers extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = Router.getActiveRouteName(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(Navigator.back());
      return true;
    }
    return false;
  }

  render() {
    const { app, dispatch, router } = this.props;
    if (app.loading) return <Loading />;
    return <App dispatch={dispatch} state={router} />;
  }
}

export default Routers;
