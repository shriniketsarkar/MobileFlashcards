import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, SafeAreaView } from 'react-native';
import QuizCard from './QuizCard';
import QuizResult from './QuizResult';
import {styles} from './styles';

const Quiz = props => {
  const { navigation, route, cards, decks } = props;
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
  const { currentCardNo, remainingQues, correctAnsCount } = cardStatusRef.current;
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

  return (
    <SafeAreaView style={styles.quizOuterContainer}>
      <View style={styles.quizContainer}>
        {showResult ? (
          <QuizResult
            deckTitle={decks[deckId].title}
            correctAns={correctAnsCount}
            totalCards={totalCards}
            reStartQuiz={reStartQuiz}
            navigation={navigation}
          />
        ) : (
          <View style={styles.info}>
            <Text style={styles.label}>{`${quesRemaining} remaining`}</Text>
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
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({ decks, cards }) => {
  return {
    decks,
    cards,
  };
};

export default connect(mapStateToProps)(Quiz);
