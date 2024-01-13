import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Card, Button} from 'react-native-ui-lib';
import {Colors, Typography, Spacings} from 'react-native-ui-lib';
import {ThemeManager} from 'react-native-ui-lib';
import {Assets, Image} from 'react-native-ui-lib';
import HomeLogo from "./assets/Home.svg"

// Assets
Assets.loadAssetsGroup('icons', {
  icon1: require('./assets/Home.png'),
});

Colors.loadColors({
  primaryColor: '#08633D',
  secondaryColor: '#2EAC6D',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'}
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});

// ThemeManager.setComponentTheme('Card', {
//   borderRadius: 8,
//   borderColor: "green"
// });
ThemeManager.setComponentTheme('Button', (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 0
    };
  }
});



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen is here</Text>
      <Button label={'Press'} 
      size={Button.sizes.large} 
      backgroundColor={Colors.secondaryColor} 
      square />
     <Image source={Assets.icons.icon1} 
      style = {{ width: 30, height: 30, }} />

      <HomeLogo />
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen is here</Text>
    </View>
  );
}


// Tab navigator

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
     {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>*/}
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
