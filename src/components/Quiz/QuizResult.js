import React from 'react';
import { Text, View, Button } from 'react-native';
import { clearAllLocalNotifications, setupLocalNotification } from '../../utils/helper';
import { styles } from './styles';

const QuizResult = props => {
  const { navigation, deckTitle, correctAns, totalCards, reStartQuiz } = props;

  const onPressBack = () => {
    // Trigger clearing of notifcations and setup a new notification
    // for until next time if the user has not started any quiz.
    // Currently this time is set to next min for demo.
    clearAllLocalNotifications().then(() => {
      setupLocalNotification();
    });
    navigation.goBack();
  };

  const onPressRetake = () => {
    reStartQuiz();
  };

  return (
    <View style={styles.container}>
      <View style={styles.quizResult}>
        <View>
          <Text style={styles.quizResultLbl}>{'Quiz Results'}</Text>
        </View>
        <Text style={styles.quizResultLbl}>{`Quiz : ${deckTitle}`}</Text>
        <Text style={styles.quizResultLbl}>
          {`You scored ${correctAns} correct out of ${totalCards}`}
        </Text>
        <View>
          <Text style={styles.quizResultLbl}>
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
