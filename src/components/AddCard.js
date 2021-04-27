import React, { useState, useRef, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
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
      marginHorizontal: 16,
    },
    fullBody: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5,
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center',
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <View style={styles.deckBody}>
          <Text style={{ fontSize: 20 }}>Enter your question below:</Text>
          <TextInput
            style={styles.input}
            placeholder={'Enter question for your card.'}
            onBlur={Keyboard.dismiss}
            onChangeText={handleQuesChange}
            value={cardQues}
          />
          <Text style={{ fontSize: 20 }}>Enter your answer below:</Text>
          <TextInput
            style={styles.input}
            onBlur={Keyboard.dismiss}
            placeholder={'Enter answer for the question.'}
            onChangeText={handleAnsChange}
            value={cardAns}
          />
          <TouchableOpacity style={styles.saveButton} onPress={onPressAddCard}>
            <Text style={styles.saveButtonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect()(AddCard);
