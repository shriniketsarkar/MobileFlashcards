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
import { handleAddCard } from '../actions/shared';
import { generateUID } from '../utils/helper';
import { styles } from './styles';

const AddCard = props => {
  const { navigation, route } = props;
  const deckId = route?.params?.deckId;
  const dispatch = useDispatch();
  const [cardQues, setCardQues] = useState('');
  const [cardAns, setCardAns] = useState('');

  const handleQuesChange = text => {
    setCardQues(text);
  };

  const handleAnsChange = text => {
    setCardAns(text);
  };

  const onPressAddCard = () => {
    const newCardId = generateUID();
    dispatch(
      handleAddCard({
        ques: cardQues,
        ans: cardAns,
        cardId: newCardId,
        deckId: deckId,
      }),
    );
    navigation.goBack();
  };

  const isCreateDisabled = () => {
    return cardQues.length === 0 || cardAns.length === 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <Text style={styles.label}>Enter your question below:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter question for your card.'}
          onBlur={Keyboard.dismiss}
          onChangeText={handleQuesChange}
          value={cardQues}
          maxLength={100}
        />
        <Text style={styles.label}>Enter your answer below:</Text>
        <TextInput
          style={styles.input}
          onBlur={Keyboard.dismiss}
          placeholder={'Enter answer for the question.'}
          onChangeText={handleAnsChange}
          value={cardAns}
          maxLength={100}
        />
        <Button
          onPress={onPressAddCard}
          disabled={isCreateDisabled()}
          title="Add Card"
          color="#841584"
          accessibilityLabel="Add a new card."
        />
      </View>
    </SafeAreaView>
  );
};

export default connect()(AddCard);
