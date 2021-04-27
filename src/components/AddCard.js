import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { handleAddCard } from '../actions/shared';
import {generateUID} from '../utils/helper';

const AddCard = props => {
  const { navigation, route } = props;
  const deckId = route?.params?.deckId;
  const dispatch = useDispatch();
  const [cardQues, setCardQues] = useState('');
  const [cardAns, setCardAns] = useState('');

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

  const AddDeckBody = () => (
    <View style={styles.deckBody}>
      <Text style={{ fontSize: 20 }}>Enter your question below:</Text>
      <TextInput
        clearButtonMode={true}
        style={styles.input}
        onChangeText={text => setCardQues(text)}
        defaultValue={cardQues}
        placeholder={'Enter question for your card.'}
      />
      <Text style={{ fontSize: 20 }}>Enter your answer below:</Text>
      <TextInput
        autoFocus={false}
        clearButtonMode={true}
        style={styles.input}
        onChangeText={text => setCardAns(text)}
        defaultValue={cardAns}
        placeholder={'Enter answer for the question.'}
      />
      <Button
        onPress={onPressAddCard}
        title="Add Card"
        color="#841584"
        accessibilityLabel="Add a new card."
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        <AddDeckBody />
      </View>
    </SafeAreaView>
  );
};

export default connect()(AddCard);
