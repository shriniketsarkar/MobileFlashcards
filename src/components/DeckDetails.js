import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { removeDeck } from '../actions/decks';
import { clearAllLocalNotifications, setupLocalNotification } from '../utils/helper';

const DeckDetails = props => {
  const { navigation, route, decks } = props;
  const dispatch = useDispatch();
  let deckId = route?.params?.deckId;
  if (deckId === undefined) {
    // The route is coming from Add Deck, hence display the last deck.
    deckId = decks.length - 1;
  }
  const deck = decks[deckId];

  const onPressAddCards = () => {
    navigation.navigate('AddCard', { deckId: deckId });
  };

  const onPressStartQuiz = () => {
    if (!deck.cards.length) {
      return navigation.navigate('Error');
    }
    // Trigger clearing of notifcations and setup a new notification
    // for until next time if the user has not started any quiz.
    // Currently this time is set to next min for demo.
    clearAllLocalNotifications().then(() => {
      setupLocalNotification();
    });
    navigation.navigate('Quiz', { deckId: deckId });
  };

  const onPressDeleteDeck = () => {
    dispatch(removeDeck(deck.id));
    navigation.dispatch(StackActions.popToTop());
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    fullBody: {
      flex: 1,
      width: '97%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 5.49,
      borderRadius: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'flex-start',
      marginLeft: 15,
      marginBottom: 10,
    },
    info: {
      marginBottom: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <View style={styles.info}>
          <Text style={styles.label}>{`Deck :   ${deck?.title}`}</Text>
          <Text style={styles.label}>
            {`Cards in Deck :   ${deck?.cards.length}`}
          </Text>
        </View>
        <Button
          onPress={onPressAddCards}
          title="Add Card"
          color="#841584"
          accessibilityLabel="Add a new card to deck."
        />
        <Button
          onPress={onPressStartQuiz}
          title="Start a Quiz"
          color="#841584"
          accessibilityLabel="Start a Quiz"
        />
        <Button
          onPress={onPressDeleteDeck}
          title="Delete Deck"
          color="#841584"
          accessibilityLabel="Delete Deck"
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(DeckDetails);
