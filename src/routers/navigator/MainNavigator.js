import HomeTab from '../tab/HomeTab'
import Detail from '@/containers/detail'
import { Navigator } from '@/utils'

const MainNavigator = Navigator.createStackNavigator(
  {
    HomeTab: { screen: HomeTab },
    Detail: { screen: Detail },
  },
  {
    headerMode: 'float',
  }
)


export default MainNavigator