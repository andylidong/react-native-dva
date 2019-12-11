import React from 'react';
import { AppRegistry } from 'react-native';
import models from './models';
import { Dva, Navigator } from './utils';
import Routers from './routers';
import AppNavigator from '@/routers/navigator/AppNavigator';

const { routerMiddleware, routerReducer } = Navigator;

const app = Dva.init({
  initialState: {},
  models,
  extraReducers: { router: routerReducer(AppNavigator) },
  onAction: [routerMiddleware],
  onError(e) {
    // eslint-disable-next-line no-console
    console.log('onError', e);
  },
});

const App = app.start(<Routers />);

AppRegistry.registerComponent('RNDva', () => App);
