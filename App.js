import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Decks from './src/components/Decks';
import AddDeck from './src/components/AddDeck';
import {createStore} from 'redux';
import reducer from './src/reducers';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();
const store = createStore(reducer);
const updateDecks = deckTitle => {};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Decks" component={Decks} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
