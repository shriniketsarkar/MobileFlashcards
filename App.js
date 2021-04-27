import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import reducer from './src/reducers';
import { Provider } from 'react-redux';
import Decks from './src/components/Decks';
import DeckDetails from './src/components/DeckDetails';
import AddDeck from './src/components/AddDeck';
import Error from './src/components/Error';

const store = createStore(reducer);
const DecksStack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DecksStack.Navigator>
          <DecksStack.Screen name="Decks" component={Decks} />
          <DecksStack.Screen name="DeckDetails" component={DeckDetails} />
          <DecksStack.Screen name="AddDeck" component={AddDeck} />
          <DecksStack.Screen name="Error" component={Error} />
        </DecksStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

