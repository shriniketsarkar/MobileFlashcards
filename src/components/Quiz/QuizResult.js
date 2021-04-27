import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fullBody: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
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
      <View style={styles.fullBody}>
        <View>
          <Text style={styles.label}>{'Quiz Results'}</Text>
        </View>
        <Text style={styles.label}>{`Quiz : ${deckTitle}`}</Text>
        <Text style={styles.label}>
          {`You scored ${correctAns} correct out of ${totalCards}`}
        </Text>
        <View>
          <Text style={styles.label}>
            {Math.floor(correctAns / totalCards) * 100 > 70
              ? 'Amazing job scoring high!!'
              : 'Better luck next time.'}
          </Text>
        </View>
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
    </View>
  );
};

export default QuizResult;
