import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import reducer from './src/reducers';
import middlewares from './src/middlewares';
import { Provider } from 'react-redux';
import Decks from './src/components/Decks';
import DeckDetails from './src/components/DeckDetails';
import AddDeck from './src/components/AddDeck';
import Error from './src/components/Error';
import AddCard from './src/components/AddCard';
import Quiz from './src/components/Quiz/Quiz';
import { Notifications } from 'react-native-notifications';
import { setupLocalNotification } from './src/utils/helper';

const store = createStore(reducer, middlewares);
const DecksStack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Initial setup to be done once for when the app loads.
    // This setup is required for the notification to function properly.
    // We register for notifications.
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground(
      (notification, completion) => {
        console.log(
          `Notification received in foreground: ${notification.title} : ${notification.body}`,
        );
        completion({ alert: false, sound: false, badge: false });
      },
    );

    Notifications.events().registerNotificationOpened(
      (notification, completion) => {
        console.log(`Notification opened: ${notification.payload}`);
        completion();
      },
    );

    // We trigger setup of our notification using AsyncStorage and Notifcations from react-native-notifications.
    setupLocalNotification();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DecksStack.Navigator>
          <DecksStack.Screen name="Decks" component={Decks} />
          <DecksStack.Screen name="DeckDetails" component={DeckDetails} />
          <DecksStack.Screen name="AddDeck" component={AddDeck} />
          <DecksStack.Screen name="AddCard" component={AddCard} />
          <DecksStack.Screen name="Quiz" component={Quiz} />
          <DecksStack.Screen name="Error" component={Error} />
        </DecksStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
