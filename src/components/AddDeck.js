import * as React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {addDeck} from '../actions/decks';
import {generateUID} from '../utils/helper';

const AddDeck = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [deckTitleText, onChangeDeckTitleText] = React.useState();

  const onPressAddDeck = () => {
    dispatch(
      addDeck({
        id: generateUID(),
        title: deckTitleText,
        count: 0,
      }),
    );
    navigation.navigate('DeckDetails');
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
      <Text style={{fontSize: 20}}>
        What will be the title of this new Deck:
      </Text>
      <TextInput
        autoFocus={true}
        clearButtonMode={true}
        style={styles.input}
        onChangeText={onChangeDeckTitleText}
        value={deckTitleText}
        placeholder={'Enter name of your Deck'}
      />
      <Button
        onPress={onPressAddDeck}
        title="Create Deck"
        color="#841584"
        accessibilityLabel="Add a new deck."
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

export default connect()(AddDeck);
