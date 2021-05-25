import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js';
import ResultScreen from './src/screens/ResultClickScreen';
import ResultContent from './src/screens/ResultContent';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultClick: ResultScreen,
    ResultContent: ResultContent
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Foodster'
    }
  }
);

export default createAppContainer(navigator);