import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

const QuizResult = props => {
  const { navigation, deckTitle, correctAns, totalCards, reStartQuiz } = props;

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressRetake = () => {
    reStartQuiz();
  };

  return (
    <View style={styles.container}>
      <Text>{'Quiz Results'}</Text>
      <Text>{`Quiz : ${deckTitle}`}</Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        {`You scored ${correctAns} correct out of ${totalCards}.`}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {Math.floor(correctAns / totalCards) * 100 > 70
          ? 'Amazing job scoring high!!'
          : 'Better luck next time.'}
      </Text>
      <Button
        onPress={onPressRetake}
        title="Restart Quiz"
        color="#841584"
        accessibilityLabel="Restart Quiz."
      />
      <Button
        onPress={onPressBack}
        title="Back to Deck"
        color="#841584"
        accessibilityLabel="Go back to deck view"
      />
    </View>
  );
};

export default QuizResult;
