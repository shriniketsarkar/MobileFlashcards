import React, {useState, useRef, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import QuizCard from './QuizCard';
import QuizResult from './QuizResult';

const Quiz = props => {
  const {navigation, route, cards, decks} = props;
  const deckId = route?.params?.deckId;
  const cardKeys = decks[deckId].cards;
  const totalCards = cardKeys.length;
  // Store the array of card keys in a ref.
  const cardStatusRef = useRef({
    currentCardNo: 0,
    correctAnsCount: 0,
    remainingQues: totalCards - 1,
  });

  const [showAnswer, setShowAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const {currentCardNo, remainingQues, correctAnsCount} = cardStatusRef.current;
  const currentCard = cards[cardKeys[currentCardNo]];
  const [ansBtnText, setAnsBtnText] = useState('Show Answer');
  const [quesRemaining, setQuesRemaining] = useState(remainingQues);

  const onPressShowAnswer = () => {
    if (showAnswer) {
      setShowAnswer(false);
      setAnsBtnText('Show Answer');
    } else {
      setShowAnswer(true);
      setAnsBtnText('Hide Answer');
    }
  };

  const onPressCorrect = () => {
    const prevRef = cardStatusRef.current;
    if (!prevRef.remainingQues) {
      cardStatusRef.current = {
        currentCardNo: prevRef.currentCardNo,
        correctAnsCount: prevRef.correctAnsCount + 1,
        remainingQues: prevRef.remainingQues,
      };
      setShowResult(true);
    } else {
      const res = prevRef.remainingQues === 0 ? 0 : prevRef.remainingQues - 1;
      cardStatusRef.current = {
        currentCardNo: prevRef.currentCardNo + 1,
        correctAnsCount: prevRef.correctAnsCount + 1,
        remainingQues: res,
      };
      setQuesRemaining(res);
    }
    setShowAnswer(false);
    setAnsBtnText('Show Answer');
  };

  const onPressWrong = () => {
    const prevRef = cardStatusRef.current;
    if (!prevRef.remainingQues) {
      setShowResult(true);
    } else {
      const res = prevRef.remainingQues === 0 ? 0 : prevRef.remainingQues - 1;
      cardStatusRef.current = {
        currentCardNo: prevRef.currentCardNo + 1,
        correctAnsCount: prevRef.correctAnsCount,
        remainingQues: res,
      };
      setQuesRemaining(res);
    }
    setShowAnswer(false);
    setAnsBtnText('Show Answer');
  };

  const reStartQuiz = () => {
    cardStatusRef.current = {
      currentCardNo: 0,
      correctAnsCount: 0,
      remainingQues: totalCards - 1,
    };
    setShowResult(false);
    setQuesRemaining(cardStatusRef.current.remainingQues);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullBody}>
        {showResult ? (
          <QuizResult
            deckTitle={decks[deckId].title}
            correctAns={correctAnsCount}
            totalCards={totalCards}
            reStartQuiz={reStartQuiz}
            navigation={navigation}
          />
        ) : (
          <View>
            <View>
              <Text style={{fontSize: 20}}>{`${quesRemaining} remaining`}</Text>
            </View>
            <QuizCard
              ques={currentCard.ques}
              ans={currentCard.ans}
              showAnswer={showAnswer}
            />
            <Button
              onPress={onPressShowAnswer}
              title={ansBtnText}
              color="#841584"
              accessibilityLabel="Toggle to show answer to question."
            />
            <View>
              <Button
                onPress={onPressCorrect}
                title="Correct"
                color="#841584"
                accessibilityLabel="Answer was correct"
              />
              <Button
                onPress={onPressWrong}
                title="In Correct"
                color="#841584"
                accessibilityLabel="Answer was incorrect"
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({decks, cards}) => {
  return {
    decks,
    cards,
  };
};

export default connect(mapStateToProps)(Quiz);
