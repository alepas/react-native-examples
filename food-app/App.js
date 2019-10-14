import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RestaurantsShowScreen from "./src/screens/RestaurantsShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantsShow: RestaurantsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

//Creates a really default app component.
export default createAppContainer(navigator);