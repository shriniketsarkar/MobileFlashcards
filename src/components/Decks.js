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
  return (
    <SafeAreaView style={styles.container}>
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
