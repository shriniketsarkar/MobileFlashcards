import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Keyboard,
} from 'react-native';
import { addDeck } from '../actions/decks';
import { generateUID } from '../utils/helper';
import { styles } from './styles';

const AddDeck = props => {
  const { navigation } = props;
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
    navigation.navigate('DeckDetails', { deckId: newDeckId });
  };

  const isCreateDisabled = () => {
    return deckTitleText.length === 0;
  };

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
