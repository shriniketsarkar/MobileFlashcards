import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import { handleAddCard } from '../actions/shared';
import { generateUID } from '../utils/helper';

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
