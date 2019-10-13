import {createStackNavigator, createAppContainer} from "react-navigation";
import SearchScreen from "./src/screen/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

//Creates a really default app component.
export default createAppContainer(navigator);