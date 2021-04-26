import * as React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {addDeck} from '../actions/decks';
import {generateUID} from '../utils/helper';

const AddDeck = props => {
  const dispatch = useDispatch();
  const [deckTitleText, onChangeDeckTitleText] = React.useState();

  const onPressAddDeck = () => {
    dispatch(
      addDeck({
        id: generateUID(),
        title: deckTitleText,
        count: 0,
      }),
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    fullBody: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      width: '90%',
    },
    deckBody: {
      width: '97%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: 'green',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 2.49,
      borderRadius: 2,
    },
  });

  const AddDeckHeader = () => {
    return (
      <View
        elevation={1}
        style={{
          height: 50,
          width: '97%',
          margin: 5,
          backgroundColor: '#fff',
          border: 2.9,
          borderColor: 'green',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 1,
          shadowRadius: 2.49,
          borderRadius: 2,
        }}>
        <Text
          style={{
            textShadowColor: 'salmon',
            textShadowOffset: {width: 1, height: 0},
            textShadowRadius: 10,
            fontSize: 20,
            fontWeight: '400',
            flex: 1,
            alignSelf: 'center',
            paddingTop: 10,
            fontSize: 30,
          }}>
          Mobile Flashcards
        </Text>
      </View>
    );
  };

  const AddDeckBody = () => (
    <View style={styles.deckBody}>
      <Text style={{fontSize: 20}}>
        What will be the title of this new Deck:
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDeckTitleText}
        value={deckTitleText}
        placeholder={'Enter name of your Deck'}
      />
      <Button
        onPress={onPressAddDeck}
        title="Create Deck"
        color="#841584"
        accessibilityLabel="Add a new deck."
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <AddDeckHeader>Add Deck</AddDeckHeader>
        <AddDeckBody />
      </View>
    </SafeAreaView>
  );
};

export default connect()(AddDeck);
