import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notifications } from 'react-native-notifications';
const NOTIFICATION_KEY = 'UdaciFitness:notifications';

// Funciton to handle setting up notifications.
// It uses AsyncStorage to identify a value set on it when the user
// takes a quiz. If the value is null it sets up the notification.
export const setupLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (!data) {
        Notifications.ios.checkPermissions().then(currentPermissions => {
          Notifications.ios.cancelAllLocalNotifications();

          let currDate = new Date();
          let aMinDate = new Date(currDate.getTime() + 60000);

          // Setting this time to +1 min for demo of the notification.
          // Screen shots have been included in the git repo of this functionality working.

          Notifications.postLocalNotification({
            body: "Don't forget to take your quizes today!",
            title: 'Your Missing Out on Quizes',
            silent: false,
            fireDate: aMinDate.toISOString(),
          });
        });
        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      }
    });
};

export const clearAllLocalNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(() => {
    Notifications.ios.cancelAllLocalNotifications();
  });
};

export const generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
