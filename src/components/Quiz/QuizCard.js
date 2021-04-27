import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

const QuizCard = props => {
  const { ques, ans, showAnswer } = props;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{ques}</Text>
      {showAnswer && <Text style={{ fontSize: 20 }}>{ans}</Text>}
    </View>
  );
};

export default QuizCard;
