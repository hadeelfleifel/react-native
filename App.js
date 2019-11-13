import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from "./src/screens/ComponentScreen"
import List from "./src/screens/List"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen from "./src/screens/SquareScreen"
import TextScreen from './src/screens/TextScreen'
import VideoScreen from "./src/screens/Video"
import PasswordScreen from './src/screens/PasswordScreen'
import BoxScreen from './src/screens/BoxScreen'
import Card from './src/screens/ShowCard'
import SemiCircle from './src/screens/SemiCircle'
import Picker from './src/screens/Picker'
import BGColor from './src/screens/BackgroundColor'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen:ComponentScreen,
    List:List,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    Text:TextScreen,
    Video:VideoScreen,
    Password:PasswordScreen,
    Boxs:BoxScreen,
    Card:Card,
    Semi:SemiCircle,
    Picker:Picker,
    BGColor:BGColor
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
