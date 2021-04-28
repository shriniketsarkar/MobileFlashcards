import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles';

const QuizCard = props => {
  const { ques, ans, showAnswer } = props;
  return (
    <View style={styles.fullBody}>
      <View>
        <Text style={styles.quizResultLbl}>{`Question:   ${ques}`}</Text>
      </View>
      <View>
        {showAnswer && <Text style={styles.quizResultLbl}>{`Answer:   ${ans}`}</Text>}
      </View>
    </View>
  );
};

export default QuizCard;
