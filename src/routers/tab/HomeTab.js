
import Home from '@/containers/home';
import Account from '@/containers/account';
import { Navigator } from '@/utils';

const HomeTab = Navigator.createBottomTabNavigator({
  Home: { screen: Home },
  Account: { screen: Account },
});

HomeTab.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  return {
    headerTitle: routeName,
  };
};

export default HomeTab;
