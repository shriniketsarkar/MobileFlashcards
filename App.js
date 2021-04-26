import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from './src/components/Decks';
import AddDeck from './src/components/AddDeck';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={Decks} />
        <Tab.Screen name="Add Deck" component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
