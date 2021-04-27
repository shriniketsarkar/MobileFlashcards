import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import {addDeck} from '../actions/decks';
import {generateUID} from '../utils/helper';

const AddDeck = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [deckTitleText, onChangeDeckTitleText] = useState('');

  const onPressAddDeck = () => {
    const newDeckId = generateUID();
    dispatch(
      addDeck({
        id: newDeckId,
        title: deckTitleText,
        cards: [],
      }),
    );
    navigation.navigate('DeckDetails', {deckId: newDeckId});
  };

  const isCreateDisabled = () => {
    return deckTitleText.length === 0;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
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
    input: {
      backgroundColor: 'white',
      elevation: 5,
      borderRadius: 5,
      height: 40,
      margin: 12,
      borderWidth: 1,
      width: '90%',
    },
    label: {
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: 15,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <Text style={styles.label}>
          What will be the title of this new Deck:
        </Text>
        <TextInput
          autoFocus={true}
          onBlur={Keyboard.dismiss}
          style={styles.input}
          onChangeText={onChangeDeckTitleText}
          value={deckTitleText}
          placeholder={'Enter name of your Deck'}
          maxLength={100}
        />
        <Button
          onPress={onPressAddDeck}
          disabled={isCreateDisabled()}
          title="Create Deck"
          color="#841584"
          accessibilityLabel="Add a new deck."
        />
      </View>
    </SafeAreaView>
  );
};

export default connect()(AddDeck);
