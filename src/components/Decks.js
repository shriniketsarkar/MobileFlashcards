import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Text, View } from 'react-native';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4.49,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
});

const Decks = props => {
  const { navigation, decks } = props;

  const onPressAddDeck = () => {
    console.log('Adding a new deck.');
    navigation.navigate('AddDeck');
  };

  const DeckItem = ({ title, count }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{count} cards</Text>
    </View>
  );

  const AddDeck = () => (
    <Button
      onPress={onPressAddDeck}
      title="Add New Deck"
      color="#841584"
      accessibilityLabel="Add a new deck."
    />
  );

  const renderDeckRow = ({ item, index }) => {
    const onPress = () =>
      navigation.navigate('DeckDetails', { deckIndex: index });
    return (
      <TouchableHighlight onPress={onPress}>
        <DeckItem title={item.title} count={item.cards.length} />
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={decks}
        renderItem={renderDeckRow}
        keyExtractor={item => item.id}
      />
      <AddDeck />
    </SafeAreaView>
  );
};

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(Decks);
