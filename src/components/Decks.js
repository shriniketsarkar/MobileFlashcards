import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const Decks = props => {
  const { navigation, decks, deckKeys } = props;

  const onPressAddDeck = () => {
    navigation.navigate('AddDeck');
  };

  const DeckItem = ({ title, count }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{count} cards</Text>
    </View>
  );

  const renderDeckRow = ({ item }) => {
    const onPress = () => navigation.navigate('DeckDetails', { deckId: item });
    return (
      <TouchableHighlight onPress={onPress}>
        <DeckItem title={decks[item].title} count={decks[item].cards.length} />
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.deckContainer}>
      <FlatList
        data={deckKeys}
        renderItem={renderDeckRow}
        keyExtractor={item => item}
      />
      <Button
        onPress={onPressAddDeck}
        title="Add New Deck"
        color="#841584"
        accessibilityLabel="Add a new deck."
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({ decks }) => {
  const deckKeys = Object.keys(decks);

  return {
    deckKeys,
    decks,
  };
};

export default connect(mapStateToProps)(Decks);
