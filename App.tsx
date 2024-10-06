import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Page1 from '../Pt1/assets/web/Page1';
import Page2 from '../Pt1/assets/web/Page2';

const Stack = createStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'1'}>
      <Stack.Screen name={'1'} component={Page1} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name={'2'} component={Page2} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
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
