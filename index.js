import { AppRegistry } from 'react-native';
import App from './App';
import RootStackNavigator from "./pages/example/RootStackNavigator";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('RNDemo', () => RootStackNavigator);
