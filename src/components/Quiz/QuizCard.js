import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fullBody: {
    width: '100%',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.49,
    borderRadius: 20,
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

const QuizCard = props => {
  const { ques, ans, showAnswer } = props;
  return (
    <View style={styles.fullBody}>
      <View>
        <Text style={styles.label}>{`Question:   ${ques}`}</Text>
      </View>
      <View>
        {showAnswer && <Text style={styles.label}>{`Answer:   ${ans}`}</Text>}
      </View>
    </View>
  );
};

export default QuizCard;
