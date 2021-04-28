import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Text, SafeAreaView, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { removeDeck } from '../actions/decks';
import { styles } from './styles';

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
    navigation.navigate('Quiz', { deckId: deckId });
  };

  const onPressDeleteDeck = () => {
    dispatch(removeDeck(deck.id));
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <View style={styles.info}>
          <Text style={styles.detailsLabel}>{`Deck :   ${deck?.title}`}</Text>
          <Text style={styles.detailsLabel}>
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
