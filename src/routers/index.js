import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import Loading from '@/components/Loading';
import { Dva, Navigator } from '@/utils';
import AppNavigator from '@/routers/navigator/AppNavigator';

const { App } = Navigator;
const AppContainer = App(AppNavigator);

/**
 * 整个路由管理
 */
@Dva.connect(({ app, router }) => ({ app, router }))
class Routers extends PureComponent {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = Navigator.getActiveRouteName(this.props.router);
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
    return <AppContainer dispatch={dispatch} state={router} />;
  }
}

export default Routers;
