import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { removeDeck } from '../actions/decks';

const styles = StyleSheet.create({});

const DeckDetails = props => {
  const { navigation, route, decks } = props;
  const dispatch = useDispatch();
  let deckIndex = route?.params?.deckIndex;
  if (deckIndex === undefined) {
    // The route is coming from Add Deck, hence display the last deck.
    deckIndex = decks.length - 1;
  }
  const deck = decks[deckIndex];
  const onPressAddCards = () => {
    console.log('Add new card pressed.');
  };

  const onPressStartQuiz = () => {
    if (!deck.cards.length) {
      navigation.navigate('Error');
    }
  };

  const onPressDeleteDeck = () => {
    dispatch(removeDeck(deck.id));
    navigation.dispatch(StackActions.popToTop());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.cards.length}</Text>
        <Button
          onPress={onPressAddCards}
          title="Create Card"
          color="#841584"
          accessibilityLabel="Add a new card to deck."
        />
        <Button
          onPress={onPressStartQuiz}
          title="Start Quiz"
          color="#841584"
          accessibilityLabel="Start Quiz"
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
